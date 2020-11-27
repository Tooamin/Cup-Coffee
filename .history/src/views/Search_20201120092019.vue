<template>
  <div class="search">
    <Bgbox>
      <div class="content">
        <div class="search">
          <van-search
            v-model="name"
            placeholder="请输入你想搜索的商品"
            ref="search"
          />
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
  data() {
    return {
      name: "",
    };
  },
  components: {
    Bgbox,
  },
  created() {
    this.$nextTick(() => {
      //   获取搜索框
      let searChinput = this.$refs.search.querySelector('[type="search"]');

       ;
      searChinput.focus();
    });
  },
  methods: {
    getSearch() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
    },
  },
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
        background-color: #ffffff;
      }
    }
  }
}
</style>