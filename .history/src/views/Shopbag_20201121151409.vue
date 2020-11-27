<template>
  <div class="shopbag">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <div v-if="shopbagData.length == 0" class="empty-show">
      <van-empty description="购物袋空空如也，去逛一逛!">
        <van-button
          round
          color="#0C34BA"
          class="bottom-button"
          @click="gorouter('Home')"
        >
          逛一逛
        </van-button>
      </van-empty>
    </div>

    <div class="shopbag-pro" v-if="!shopbagData.length == 0">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="哎呀，没有了!"
        offset="20"
        @load="loadData"
      >
        <div class="topnav">
          <div class="clear">
            <van-icon name="delete" @click="removeSelected"/>清空
          </div>
        </div>
        <div
          class="shopbag-item"
          v-for="(item, index) in shopbagData"
          :key="index"
        >
          <van-swipe-cell>
            <div class="checkbox">
              <van-checkbox
                v-model="item.isChecked"
                @change="simpleSelect"
                checked-color="#7186c7"
              ></van-checkbox>
            </div>
            <div class="pro-img" @click="goDetail(item.pid)">
              <img :src="item.small_img" alt="" />
            </div>
            <div class="pro-info">
              <div class="pro-title">{{ item.name }}</div>
              <div class="pro-detail">{{ item.rule }}</div>
              <div class="pro-price">￥ {{ item.price }}</div>
            </div>
            <div class="shopbag-count">
              <van-stepper
                v-model="item.count"
                theme="round"
                button-size="20"
                disable-input
                @change="modifyCount(item)"
              />
            </div>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                @click="removeProOne(index, item.sid)"
              />
            </template>
          </van-swipe-cell>
        </div>
      </van-list>
    </div>
    <div class="rec-pro">
      <div class="title">猜你喜欢</div>
      <div class="rec-proinfo">
        <div
          class="pro-info-item"
          v-for="(item, index) in recData"
          :key="index"
        >
          <div class="info-img" @click="goDetail(item.pid)">
            <img :src="item.smallImg" alt="" />
          </div>
          <div class="info-title">{{ item.name }}</div>
          <div class="info-price">￥{{ item.price }}</div>
          <div class="rec-icon" @click="goDetail(item.pid)">+</div>
        </div>
      </div>
    </div>
    <div class="submit">
      <van-submit-bar :price="total" button-text="提交订单" label=" " @submit="commit">
        <van-checkbox
          v-model="isAllChecked"
          @click="allSelect"
          checked-color="#7186c7"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import "../assets/less/shopbag.less";
export default {
  name: "Shopbag",
  data() {
    return {
      // 单选状态
      ischeck: false,

      count: 1,
      // 全选状态
      isAllChecked: false,
      //购物袋全部数据
      addShopbagData: [],
      //购物袋数据
      shopbagData: [],

      dataCount: 8,
      startIndex: 0,

      loading: true,

      recData: [],
      pid: "",
      finished: false,
      total: 0,
    };
  },
  created() {
    //获取购物袋数据
    this.getShopbagData();
    //获取推荐商品
    this.getProrecData();
  },
  methods: {
    goBack(){

    },
    gorouter(data) {
      this.$router.push({ name: data });
    },
    //获取购物袋数据
    getShopbagData() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/findAllShopcart",
        params: {
          appkey: this.appKey,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 5000) {
            result.data.result.map((v) => {
              v.isChecked = false;
            });

            this.allShopbagData = result.data.result;

            //截取显示的数量
            this.shopbagData = this.allShopbagData.slice(
              this.startIndex,
              this.startIndex + this.dataCount
            );

            this.startIndex += this.dataCount;

            this.loading = false;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },

    loadData() {
      setTimeout(() => {
        let data = this.allShopbagData.slice(
          this.startIndex,
          this.startIndex + this.dataCount
        );

        this.startIndex += this.dataCount;

        this.shopbagData.push(...data);

        this.isAllChecked = false;

        if (data.length < this.dataCount) {
          this.finished = true;
        } else {
          this.loading = false;
        }
      }, 1500);
    },
    getProrecData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/typeProducts",
        params: {
          appkey: this.appKey,
          key: "isHot",
          value: 1,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 500) {
            this.recData = result.data.result;
          }
        })
        .catch((err) => {
           ;
        });
    },
    goDetail(pid) {
      this.$router.push({ name: "Detall", params: { pid } });
    },
    //全选
    allSelect() {
      this.shopbagData.map((v) => {
        v.isChecked = this.isAllChecked;
      });

      this.Calculate();
    },
    //单选
    simpleSelect() {
      this.Calculate();
      for (let i = 0; i < this.shopbagData.length; i++) {
        if (!this.shopbagData[i].isChecked) {
          this.isAllChecked = false;
          return;
        }
      }
      this.isAllChecked = true;
    },
    //单个删除
    removeProOne(index, sid) {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "POST",
        url: "/deleteShopcart",
        data: {
          appkey: this.appKey,
          sids: JSON.stringify([sid]),
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 7000) {
            this.shopbagData.splice(index, 1);
            this.Calculate();
          }

          this.$toast(result.data.msg);
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    isSelectProduct() {
      for (let i = 0; i < this.shopbagData.length; i++) {
        if (this.shopbagData[i].isChecked) {
          //如果存在勾选商品
          return true;
        }
      }

      return false;
    },
    //  删除选中
    removeSelected() {
      let isHas = this.isSelectProduct();
      if (!isHas) {
        this.$toast("请选择删除的商品");
        return;
      }

      let sids = [];
      this.shopbagData.map((v) => {
        if (v.isChecked) {
          sids.push(v.sid);
        }
      });

      let tokenString = localStorage.getItem("__tk");

      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "POST",
        url: "/deleteShopcart",
        data: {
          appkey: this.appKey,
          sids: JSON.stringify(sids),
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 700) {
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 7000) {
            for (let i = 0; i < this.shopbagData.length; i++) {
              if (this.shopbagData[i].isChecked) {
                this.shopbagData.splice(i, 1);
                i--;
              }
            }
            this.Calculate();
          }

          this.$toast(result.data.msg);
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    //修改数量
    modifyCount(item) {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "POST",
        url: "/modifyShopcartCount",
        data: {
          appkey: this.appKey,
          sid: item.sid,
          count: item.count,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 6000) {
            if (item.isChecked) {
              this.Calculate();
            }
          } else {
            this.$toast(result.data.msg);
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    //计算总价
    Calculate() {
      this.total = 0;
      this.shopbagData.map((v) => {
        if (v.isChecked) {
          this.total += v.price * v.count;
        }
      });

      this.total *= 100;
    },
    commit() {
      let isHas = this.isSelectProduct();
      if (!isHas) {
        this.$toast('请选择购买的商品');
        return;
      }
      let sids = [];
      this.shopbagData.map(v => {
        if (v.isChecked) {
          sids.push(v.sid);
        }
      })


      this.$router.push({name: 'Pay', query: {sids: sids.join('-')}});


    }
  },
};
</script>