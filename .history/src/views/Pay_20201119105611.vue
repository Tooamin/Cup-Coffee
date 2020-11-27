<template>
  <div class="pay">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <div class="addressbox">
        <div class="address-text">
            <div class="title">梦想小镇东北1门</div>
            <div class="userinfo">马达贵(先生) 1388888888888</div>
        </div>
    </div>
  </div>
</template>

<script>
import '../assets/less/pay.less'
export default {
  name: "Pay",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
</style>