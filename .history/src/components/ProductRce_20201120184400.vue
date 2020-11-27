<template>
  <div class="productrce">
    <div class="rec-pro">
      <div class="rec-proinfo">
        <div class="pro-info-item">
          <div class="info-img">
            <img :src="item.smallImg" alt="" />
          </div>
          <div class="info-title">{{ item.name }}</div>
          <div class="info-price">￥{{ item.price }}</div>
          <div class="rec-icon" @click="goDetail(item.pid)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRce",
  props: {
      infoimg:{
          type:String,
          default:'http://www.kangliuyong.com:10002/images/product_large/IMG_0389_02.jpg'
      },
      infotitle:{
          type:String,
          default:"商品名"
      }
  },
};
</script>

<style lang="less" scoped>
</style>