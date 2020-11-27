<template>
  <div class="probox">
    <div class="Ordernumber">
      <div class="left">{{ OrderNumber }}</div>
      <div class="right">{{ OrderStatus }}</div>
    </div>
    <slot></slot>
    <div class="bottom-box">
      <div class="order-time">{{ orderTiem }}</div>
      <div class="pronumberof">共计 {{ proNumberof }} 件商品</div>
      <div class="order-total">合计 ￥ {{ proPricetotal }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prbox",
  props: {
    OrderNumber: {
      type: [Number, String],
      default: "这里填订单号",
    },
    OrderStatus: {
      type: String,
      default: "这里是订单状态",
    },
    orderTiem: {
      type: [String, Number],
      default: "1970-1-1 00:00:00",
    },
    proNumberof: {
      type: [String, Number],
      default: 2,
    },
    proPricetotal: {
      type: [String, Number],
      default: 28,
    },
  },
};
</script>

<style lang="less" scoped>
.probox {
  overflow: hidden;
  margin-top: 10px;
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
    .order-total {
      float: right;
      color: #4a6fe7;
      font-size: 16px;
    }
    .order-time {
      color: #a5a6a4;
      margin-bottom: 10px;
    }
    .pronumberof {
      float: left;
    }
  }
}
</style>