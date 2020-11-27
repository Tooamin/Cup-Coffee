<template>
  <div class="shopbag">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <div class="bag-box">
        <div class="topnav">
            <div class="clear"><van-icon name="delete" />清空</div>
        </div>
    </div>
  </div>
</template>
<script>
import "../assets/less/shopbag.less";
export default {
  name: "Shopbag",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>