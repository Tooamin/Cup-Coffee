<template>
  <div class="search">
    <Bgbox >
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
import Bgbox from "../components/Bgbox.vue";

export default {
  name: "Search",
  data(){
      return {
          name:'',
      }
  },
  components:{
      Bgbox
  }
};
</script>

<style lang="less" scoped>
.search {
    .content {
        width: 100%;
        margin-top: 100px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        /deep/ .van-search {
            background-color: transparent;
            padding: 0;

            /deep/ .van-search__content {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
        }
    }
}
</style>