<template>
  <div class="productrce">
    <div class="rec-pro">
      <div class="title">每日推荐</div>
      <div class="rec-proinfo">
        <div
          class="pro-info-item"
          v-for="(item, index) in recData"
          :key="index"
        >
          <div class="info-img" @click="goDetail(item.pid)">
            <img :src="item.smallImg" alt="" />
          </div>
          <div class="info-title">{{ item.name }}</div>
          <div class="info-price">￥{{ item.price }}</div>
          <div class="rec-icon" @click="goDetail(item.pid)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRce",
  props: {},
};
</script>

<style lang="less" scoped>
</style>