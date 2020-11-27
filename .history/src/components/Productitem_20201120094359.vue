<template>
  <div class="Productitem">
    <div class="shopbag-item">
      <van-swipe-cell>
        <div class="pro-img">
          <img :src="proImg" alt="" />
        </div>
        <div class="pro-info">
          <div class="pro-title">{{ proName }}</div>
          <div class="pro-detail">{{ proCup }}</div>
          <div class="pro-price">￥ {{ proPrice }}</div>
        </div>
        <div class="pro-count" v-if="isOpen">x{{proCount}}</div>
      </van-swipe-cell>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Productitem",
  props: {
    proName: {
      type: String,
      default: "商品名字",
    },
    proCup: {
      type: String,
      default:  " ",
    },
    proPrice: {
      type: [String, Number],
      default: "28.00",
    },
    proImg: {
      type: [String, Number],
      default:
        "http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg",
    },
    proCount:{
      type:[Number,String],
      default:1
    },
    isOpen:{
      type:Boolean,
      default:true
    }
  },
};
</script>

<style lang="less" scoped>
.Productitem {
  overflow: hidden;
  margin-top: 10px;
  img {
    width: 100%;
    display: block;
  }
  .shopbag-item {
    padding: 10px 0px;
    overflow: hidden;
    box-sizing: border-box;

    .pro-img {
      float: left;
      width: 70px;
      border-radius: 10px;
      overflow: hidden;
    }

    .pro-info {
      float: left;
      box-sizing: border-box;
      padding: 5px;

      .pro-title {
        color: #2b2b2b;
        font-size: 16px;
        font-weight: 700;
      }

      .pro-detail {
        font-size: 12px;
        color: #414141;
        margin: 4px 0px;
      }

      .pro-price {
        color: #e55442;
        font-size: 15px;
        font-weight: 700;
      }
    }
    .pro-count{
        font-size: 16px;
        float: right;
        margin-top: 30px;
        margin-right: 30px;
    }
  }
}
</style>