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
            <div class="product-item">
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
import '../assets/less/pay.less'
export default {
  name: "Pay",
  data(){
      return{
          isOpen:false,
          
          chosenAddressId:''
      }
  },
  created(){

  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
</style>