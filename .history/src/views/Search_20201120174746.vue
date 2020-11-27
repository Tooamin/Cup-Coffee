<template>
  <div class="search">
    <Bgbox>
      <div class="content">
        <van-sticky>
          <div class="search">
            <van-search
              v-model="name"
              placeholder="请输入你想搜索的商品"
              ref="search"
              @input="getSearch"
            />
          </div>
        </van-sticky>
        <div class="pro-content">
          <Productitem
            :is-open="false"
            v-for="(item, index) in productData"
            :key="index"
            :pro-name="item.name"
            :pro-price="item.price"
            :pro-img="item.smallImg"
            :pro-count="item.count"
            @pro-click="goDetail(item.pid)"
          ></Productitem>
          <van-empty
            image="search"
            description="没有搜索到您想搜索的商品"
            v-if="productData.length <= 0"
          />
        </div>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
import Productitem from "../components/Productitem.vue";

export default {
  name: "Search",
  data() {
    return {
      name: "",
      productAllData: [],
      productData:[],
      //截取的长度
      dataCount: 8,
      startIndex: 0,

      loading: true,
      finished: false,
    };
  },
  components: {
    Bgbox,
    Productitem,
  },
  created() {
    //   获取物品
    this.getSearch();
    this.$nextTick(() => {
      //   获取搜索框
      let searChinput = this.$refs.search.querySelector('[type="search"]');
    });
  },
  methods: {
    getSearch() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/search",
        params: {
          appkey: this.appKey,
          name: this.name,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == "Q001") {
            this.productAllData = result.data.result;

            this.productData = this.productAllData.splice(this.startIndex,this.startIndex+this.dataCount);


            this.startIndex += this.dataCount;

            this.loading = false;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    goDetail(pid) {
      this.$router.push({ name: "Detall", params: { pid } });
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
  .pro-content {
    padding: 10px;
  }
}
</style>