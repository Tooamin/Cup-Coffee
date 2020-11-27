<template>
  <div class="bgbox">
    <van-nav-bar
      :key="title"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "Bgbox",
  props:{
      title:{
        type:String,
        default:'标题'  
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
  background-image: url(../assets/images/bgcke.png);
  background-repeat: no-repeat;
  background-size: 100%;
  /deep/ .van-nav-bar {
        background-color: transparent;
    }

    /deep/ .van-nav-bar .van-icon {
        color: #ffffff;
    }
    /deep/ .van-nav-bar__text{
        color: #ffffff;
    }
    /deep/.van-nav-bar__title{
        color: #ffffff;
    }
}
</style>