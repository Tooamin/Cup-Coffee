<template>
  <div class="pay">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <div class="addressbox">
      <div class="address-text">
        <div class="title">梦想小镇东北1门 <van-icon name="arrow" /></div>
        <div class="userinfo">马达贵(先生) 13988888888</div>
      </div>
    </div>
    <div class="productlist">
      <div class="product-box">
        <div class="pro-title">商品列表</div>
        <div class="product-item" v-for="(item.index) in productsData">
          <div class="pro-text">香草拿铁</div>
          <div class="pro-note">大/无糖/热</div>
          <span class="pro-count">×5</span>
          <span class="pro-price">￥48</span>
        </div>
        <div class="coffeemoney">
          <van-cell title="咖啡钱包" is-link />
        </div>
        <div class="coupons">
          <van-cell title="优惠券" is-link />
        </div>
        <div class="total-box">
          <div class="total-text">合计</div>
          <div class="total-price"><span>￥</span>138.9</div>
        </div>
      </div>
    </div>
    <div class="gopay">
      <van-submit-bar label=" " :price="3050" button-text="去支付" />
    </div>
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
    sids:[],
    // 商品数据
    productsData:[],
    // 商品数量总价值
    productInfo:{
        count:0,
        total:0
    }
    };
  },
  created() {
      this.sids = this.$route.query.sids.split("-");
      //获取商品数据
      this.getShopbagInfo();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 根据sids获取购买商品的数据
    getShopbagInfo(){
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
          sids: JSON.stringify(this.sids)
        },
      })
        .then((result) => {
          this.$toast.clear();
          
          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 50000) {
            if (result.data.result.length == 0) {
              return this.$router.push({name: 'Home'});
            }
            result.data.result.map(v => {
              this.productInfo.count += v.count;
              this.productInfo.total += v.count * v.price;
            })
            this.productsData = result.data.result;
             ;
          } else {
            this.$toast(result.data.msg);
          }
        })
        .catch((err) => {
          this.$toast.clear();
          
        });
    }
  },
};
</script>

<style lang="less" scoped>
</style>