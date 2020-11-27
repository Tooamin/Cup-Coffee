<template>
  <div class="home">
    <div class="toptile">
      <div class="logotitle">
        <div class="logo-img">
          <img src="../assets/images/home_active.png" alt="" />
        </div>
        <div class="title">Lukin Coffee</div>
      </div>
      <div class="right-name">
        <span>用户名</span>
      </div>
    </div>
    <div class="banner">
      <van-swipe @change="onChange">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import "../assets/less/home.less";
export default {
  name: "Home",
};
</script>
