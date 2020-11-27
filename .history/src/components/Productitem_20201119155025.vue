<template>
  <div class="Productitem">
      <div class="Ordernumber">
          <div class="left">{{OrderNumber}}</div>
          <div class="right">{{OrderStatus}}</div>
      </div>
    <div class="shopbag-item">
      <van-swipe-cell>
        <div class="pro-img" @click="goDetail(item.pid)">
          <img
            src="http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg"
            alt=""
          />
        </div>
        <div class="pro-info">
          <div class="pro-title">名字</div>
          <div class="pro-detail">规格</div>
          <div class="pro-price">￥ 28.00</div>
        </div>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "Productitem",
  props:{
      OrderNumber:{
          type:[Number,String],
          default:'这里填订单号'
      },
      OrderStatus:{
          type:String,
          default:'这里是订单状态'
      }
  }
};
</script>

<style lang="less" scoped>
.Productitem {
  img {
    width: 100%;
    display: block;
  }
  .shopbag-item {
    padding: 10px 0px;
    overflow: hidden;
    border-bottom: 1px solid #e9e9e9;
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
}
</style>