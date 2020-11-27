<template>
  <div class="search">
    <Bgbox>
      <div class="content">
        <div class="search">
          <van-search
            v-model="name"
            placeholder="请输入你想搜索的商品"
            ref="search"
            @input="getSearch"
          />
        </div>
        <div class="pro-content">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="loadData"
          >
            <Productitem
              :is-open="false"
              v-for="(item, index) in list"
              :key="index"
              :pro-name="item.name"
              :pro-price="item.price"
              :pro-img="item.smallImg"
              :pro-count="item.count"
              @click="goDetail(item.pid)"
            ></Productitem>
          </van-list>
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
      productData:[],
      list: [],
      loading: true,
      finished: false,
      dataCount: 8,
      startIndex: 0,
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
            this.productData = result.data.result;

            this.list = this.productData.slice(
              this.startIndex,
              this.startIndex + this.dataCount
            );

            this.startIndex += this.dataCount;
             ;
             ;

            this.loading = false;
            // if (this.productData.length <= 0) {
            //   this.$toast("没有搜索到您想要的商品哦!");
            // }
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    goDetail(pid) {
      this.$router.push({ name: "Detail", params: { pid } });
    },
    loadData() {
      setTimeout(() => {
        let data = this.productData.slice(
          this.startIndex,
          this.startIndex + this.dataCount
        );

        this.startIndex += this.dataCount;

        this.list.push(...data);

        this.isAllChecked = false;

        if (data.length < this.dataCount) {
          this.finished = true;
        } else {
          this.loading = false;
        }
      }, 1500);
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