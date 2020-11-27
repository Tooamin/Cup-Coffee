<template>
  <div class="search">
    <Bgbox :title="toptitle">
      <div class="content">
        <div class="search">
          <van-search v-model="name" placeholder="请输入你想搜索的商品" />
        </div>
        <div class="pro-content"></div>
      </div>
    </Bgbox>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped>
</style>