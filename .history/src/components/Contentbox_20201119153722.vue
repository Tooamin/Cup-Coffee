<template>
  <div class="contentbox">
    <div class="content">
      <div class="content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contentbox",
};
</script>

<style lang="less" scoped>
.content {
  margin-top: 60px;
  padding: 10px;
  .content-box {
    padding: 10px 10px;
    box-sizing: border-box;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #ccc;
  }
}
</style>