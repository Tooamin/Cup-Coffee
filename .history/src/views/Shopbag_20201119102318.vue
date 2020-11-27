<template>
  <div class="shopbag">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <!-- <div v-if="shopbagData.length == 0" class="empty-show">
      <van-empty description="购物袋空空如也，去逛一逛!">
        <van-button round color="#0C34BA" class="bottom-button" @click="gorouter('Home')">
          逛一逛
        </van-button>
      </van-empty>
    </div> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="哎呀，没有了!"
      offset="20"
      @load="loadData"
    >
      <div class="shopbag-pro">
        <div class="topnav">
          <div class="clear"><van-icon name="delete" />清空</div>
        </div>
        <div
          class="shopbag-item"
          v-for="(item, index) in shopbagData"
          :key="index"
        >
          <van-swipe-cell>
            <div class="checkbox">
              <van-checkbox v-model="item.isChecked"></van-checkbox>
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
              />
            </div>
            <template #right>
              <van-button square text="删除" type="danger" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
    </van-list>
    <div class="rec-pro">
      <div class="title">每日推荐</div>
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
      <van-submit-bar :price="3050" button-text="提交订单" label=" ">
        <van-checkbox v-model="isAllchecked">全选</van-checkbox>
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
    };
  },
  created() {
    //获取购物袋数据
    this.getShopbagData();
    //获取推荐商品
    this.getProrecData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
             ;
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
          //没有数据可加载时，需要finished修改为true，这样可以不再onload事件
          this.finished = true;
        } else {
          //每次触发onload事件都需要将loading修改为false
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
             ;
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

      this.sum();
    },
    //单选
    simpleSelect() {

      for (let i = 0; i < this.shopbagData.length; i++) {
        if (!this.shopbagData[i].isChecked) {
          this.isAllChecked = false;
          return;
        }
      }
      this.sum();
      this.isAllChecked = true;
    },
    removeProOne(index,sid){
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
          tokenString
        },
      }).then((result) =>{
        this.$toast.clear();
          
          if (result.data.code == 700) {
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 7000) {
            this.shopbagData.splice(index, 1);
            this.sum();
          }

          this.$toast(result.data.msg);
      })
    }
  },
};
</script>