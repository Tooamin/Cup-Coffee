<template>
  <div class="detall">
    <div class="pro-img">
      <img
        src="http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg"
        alt=""
      />
      <div class="img-title">
          <div class="title-name">摩卡</div>
          <div class="title-subname">Mocha</div>
      </div>
      <div class="like-box">
          <div class="like-icon"><van-icon name="like" /></div>
          <div class="like-title">喜欢</div>
      </div>
    </div>
    <div class="introduce">
      <div class="introduce-box">
          <div class="close-icon"><van-icon name="cross" /></div>
            <div class="specifications-box">
                <div class="spec-title">规格</div>
            </div>
      </div>
    </div>


  </div>
</template>

<script>
import "../assets/less/detall.less";
export default {
  name: "Detall",
};
</script>

<style lang="less" scoped>
</style>