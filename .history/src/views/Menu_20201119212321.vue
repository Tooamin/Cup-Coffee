<template>
  <div class="menu">
    <Bgbox>
      <van-nav-bar left-text="返回" left-arrow fixed @click-left="back">
        <template #right>
          <div class="home-search">
            <van-search
              v-model="name"
              ref="search"
              show-action
              @search="search"
              placeholder="输入商品名称"
            />
          </div>
        </template>
      </van-nav-bar>
    </Bgbox>
  </div>
</template>

<script>
import "../components/Bgbox.vue";
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
</style>