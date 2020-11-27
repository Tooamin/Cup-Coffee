<template>
  <div class="productrce">
    <div class="rec-pro">
      <div class="rec-proinfo">
        <div class="pro-info-item">
          <div class="info-img">
            <img :src="infoImg" alt="" />
          </div>
          <div class="info-title">{{infotitle}}<div>
          <div class="info-price">￥ {{infoPrice}}</div>
          <div class="rec-icon" @click="goDetail">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRce",
  props: {
      infoImg:{
          type:String,
          default:'http://www.kangliuyong.com:10002/images/product_large/IMG_0389_02.jpg'
      },
      infotitle:{
          type:String,
          default:"商品名"
      },
      infoPrice:{
          type:String,
          default:"28.00"
      },
      
  },
  methods:{
      goDetail(){
          this.$emit("go-detail");
      }
  }
};
</script>

<style lang="less" scoped>
</style>