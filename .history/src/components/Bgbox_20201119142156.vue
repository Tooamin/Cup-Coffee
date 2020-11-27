<template>
  <div class="bgbox">
    <div class="top-nav">
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        :border="false"
        @click-left="goBack"
      />
    </div>
    <div class="content">
      <div class="content-box">
          <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bgbox",
  props: {
    title: {
      type: String,
      default: "标题",
    },
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
  .content {
    margin-top: 80px;
    padding: 10px;
    .content-box {
      padding: 10px 20px;
      box-sizing: border-box;
      width: 100%;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0px 5px 10px #ccc;
    }
  }
}
</style>