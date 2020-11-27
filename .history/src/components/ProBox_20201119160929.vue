<template>
  <div class="probox">
    <div class="Ordernumber">
      <div class="left">{{ OrderNumber }}</div>
      <div class="right">{{ OrderStatus }}</div>
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