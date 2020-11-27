<template>
  <div class="bgbox">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "Bgbox",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.bgbox {
  overflow: hidden;
  width: 100%;
  background-image: url(../src/assets/images/bgcke.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>