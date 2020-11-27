<template>
  <div class="bgbox">
    <div class="top-nav">
      <van-nav-bar
        :title="title"
        left-arrow
        :border="false"
        @click-left="goBack"
        v-if="isShow"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Bgbox",
  props: {
    title: {
      type: String,
      default: " ",
    },
    isShow:{
      type:Boolean,
      default:true
    }
  },
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
  height: 100%;
  background-image: url(../assets/images/bgcke.png);
  background-repeat: no-repeat;
  background-size: 100%;
  /deep/ .van-nav-bar {
    background-color: transparent;
  }

  /deep/ .van-nav-bar .van-icon {
    color: #ffffff;
  }
  /deep/ .van-nav-bar__text {
    color: #ffffff;
  }
  /deep/.van-nav-bar__title {
    color: #ffffff;
  }
}
</style>