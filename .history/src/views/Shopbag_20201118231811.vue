<template>
  <div class="shopbag">
    <div class="bg-box">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
  </div>
</template>
<script>
import "../assets/less/shopbag.less";
export default {
  name: "Shopbag",
};
</script>