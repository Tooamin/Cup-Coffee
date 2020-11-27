<template>
  <div class="menu">
    <Bgbox>
      <van-nav-bar left-arrow fixed @click-left="back">
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
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Menu",
  components:{
      Bgbox
  }
};
</script>

<style lang="scss" scoped>
</style>