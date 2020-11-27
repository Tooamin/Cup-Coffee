<template>
  <div class="pay">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <div class="addressbox">
      <div class="address-text" @click="showSelectAddressList">
        <div class="title">
          {{ currentAddress.address }} <span v-if="currentAddress.length <= 0"></span><van-icon name="arrow" />
        </div>
        <div class="userinfo">
          {{ currentAddress.name }} {{ currentAddress.tel }}
        </div>
      </div>
    </div>
    <div class="productlist">
      <div class="product-box">
        <div class="pro-title">商品列表</div>
        <div
          class="product-item"
          v-for="(item, index) in productsData"
          :key="index"
        >
          <div class="pro-text">{{ item.name }}</div>
          <div class="pro-note">{{ item.rule }}</div>
          <span class="pro-count">×{{ item.count }}</span>
          <span class="pro-price">￥{{ item.price * item.count }}</span>
        </div>
        <div class="coffeemoney">
          <van-cell title="咖啡钱包" is-link @click="gorandom('Wallet')" />
        </div>
        <div class="total-box">
          <div class="total-text">合计:{{ productInfo.count }}件商品</div>
          <div class="total-price"><span>￥</span>{{ productInfo.total }}</div>
        </div>
      </div>
    </div>
    <div class="gopay">
      <van-submit-bar
        label=" "
        :price="productInfo.total * 100"
        button-text="去支付"
        @submit="payBox"
      />
    </div>
    <van-popup is-link position="bottom" closeable v-model="isOpen">
      <div class="address-title">选择地址</div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="newAddress"
        @select="selectAddress"
        @edit="gorandom('AddressList')"
      />
    </van-popup>
  </div>
</template>

<script>
import "../assets/less/pay.less";
export default {
  name: "Pay",
  data() {
    return {
      isOpen: false,

      //地址id
      chosenAddressId: "",
      //   地址列表
      list: [],
      //当前地址
      currentAddress: {},

      //   购物袋sid
      sids: [],
      // 商品数据
      productsData: [],
      // 商品数量总价值
      productInfo: {
        count: 0,
        total: 0,
      },
    };
  },
  created() {
    this.sids = this.$route.query.sids.split("-");
    //获取商品数据
    this.getShopbagInfo();
    //获取地址
    this.getAddressListData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    gorandom(data) {
      this.$router.push({ name: data });
    },
    selectAddress(item, index) {
      this.isOpen = false;

      this.currentAddress = item;
    },
    // 根据sids获取购买商品的数据
    getShopbagInfo() {
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
        url: "/commitShopcart",
        params: {
          appkey: this.appKey,
          tokenString,
          sids: JSON.stringify(this.sids),
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 50000) {
            if (result.data.result.length == 0) {
              return this.$router.push({ name: "Home" });
            }
            result.data.result.map((v) => {
              this.productInfo.count += v.count;
              this.productInfo.total += v.count * v.price;
            });
            this.productsData = result.data.result;
          } else {
            this.$toast(result.data.msg);
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    newAddress() {
      this.$router.push({ name: "NewaddressList" });
    },
    showSelectAddressList() {
      this.isOpen = true;
    },
    getAddressListData() {
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
        url: "/findAddress",
        params: {
          appkey: this.appKey,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            //token检验无效,则跳到登录页面
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 20000) {
            result.data.result.map((v) => {
              v.isDefault = Boolean(v.isDefault);
              v.id = v.aid;
              v.address = `${v.province}${v.city}${v.county}${v.addressDetail}`;
              //选择默认地址
              if (v.isDefault) {
                this.chosenAddressId = v.aid;
                this.currentAddress = v;
              }
            });

            this.list = result.data.result;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    goPay() {
      let tokenString = localStorage.getItem("__tk");

      if (!tokenString) {
        //跳回登录页面
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
        url: "/pay",
        data: {
          appkey: this.appKey,
          tokenString,
          sids: JSON.stringify(this.sids),
          phone: this.currentAddress.tel,
          address: this.currentAddress.address,
          receiver: this.currentAddress.name,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else {
            this.$toast(result.data.msg);
            setTimeout(() => {
              
              this.$router.push({ name: "Order" });
            });
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    payBox() {

      if (!this.chosenAddressId) {
        this.$toast('请选择收货地址');
        return;
      }

      this.$dialog.confirm({
        title: '确认订单',
        message: '是否立即结算?',
        confirmButtonColor: '#0C34BA'
      }).then(() => {

        //提交订单
        this.goPay();

      }).catch((err) => {
        
      })
    }
  },
};
</script>

<style lang="less" scoped>
</style>