<template>
  <div class="menu">
    <Bgbox>
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
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Menu",
  data(){
      return{
          name:'',
          productData:[]
      }
  },
  components:{
      Bgbox
  }
};
</script>

<style lang="scss" scoped>
</style>