<template>
  <div class="Productitem">
    <div class="Ordernumber">
      <div class="left">{{ OrderNumber }}</div>
      <div class="right">{{ OrderStatus }}</div>
    </div>
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
        <div class="pro-count">x2</div>
      </van-swipe-cell>
    </div>
    <div class="bottom-box">
      <div class="order-time">{{ orderTiem }}</div>
      <div class="pronumberof">共计 {{proNumberof}} 件商品</div>
      <div class="order-total">合计 ￥ {{proPricetotal}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Productitem",
  props: {
    OrderNumber: {
      type: [Number, String],
      default: "这里填订单号",
    },
    OrderStatus: {
      type: String,
      default: "这里是订单状态",
    },
    proName: {
      type: String,
      default: "商品名字",
    },
    proCup: {
      type: String,
      default: "商品规格",
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
    orderTiem: {
      type: [String, Number],
      default: "1970-1-1 00:00:00",
    },
    proNumberof: {
      type: [String, Number],
      default: 2,
    },
    proPricetotal:{
        type:[String,Number],
        default:28
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
  }
  .Ordernumber {
    margin-top: 10px;
    padding: 0px 10px 10px 10px;
    overflow: hidden;
    border-bottom: 1px solid #ececec;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
  .bottom-box {
    overflow: hidden;
    padding: 10px;
    border-top: 1px solid #ececec;
    .order-total{
        float: right;
        color: #4a6fe7;
        font-size: 18px;
    }
    .order-time{
        color: #a5a6a4;
        margin-bottom: 10px;
    }
    .pronumberof{
        float: left;
    }
  }
}
</style>