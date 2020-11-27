<template>
  <div class="probox">
    <div class="Ordernumber">
      <div class="left">{{ OrderNumber }}</div>
      <div class="right">{{ OrderStatus }}</div>
    </div>
    <slot></slot>
    <div class="bottom-box">
      <div class="order-time">{{ orderTiem }}</div>
      <div class="pronumberof">共计 {{proNumberof}} 件商品</div>
      <div class="order-total">合计 ￥ {{proPricetotal}}</div>
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
  },
};
</script>

<style lang="less" scoped>
</style>