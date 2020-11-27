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
        <div class="title">规格</div>
        <div class="specifications-box">
          <div class="spec-item">
            <div class="spec-img">
              <img src="../assets/images/xiaobei2x.png" alt="" />
            </div>
            <div class="spec-title">中杯</div>
            <div class="spec-ml">355ml</div>
          </div>
          <div class="spec-item">
            <div class="spec-img">
              <img src="../assets/images/xiaobei2x.png" alt="" />
            </div>
            <div class="spec-title">中杯</div>
            <div class="spec-ml">355ml</div>
          </div>
          <div class="spec-item">
            <div class="spec-img">
              <img src="../assets/images/xiaobei2x.png" alt="" />
            </div>
            <div class="spec-title">中杯</div>
            <div class="spec-ml">355ml</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/detall.less";
export default {
  name: "Detall",
  data() {
    return {
      specItemData: [
        {
          title: "中杯",
          specImg:require('../assets/images/xiaobei2x.png')
        },
        {
          title: "大杯",
          specImg:require('../assets/images/zhongbei2x.png')
        },
        {
          title: "超大杯",
          specImg:require('../assets/images/dabei2x.png')
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>