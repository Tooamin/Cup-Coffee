<template>
  <div class="collection">
    <Bgbox :title="toptitle">
      <div class="collection-content">
        <Contentbox>
          <div class="coll-pro">
            <div
              class="pro-coll-item"
              v-for="(item, index) in likeProductData"
              :key="index"
            >
              <div class="coll-img">
                <img :src="item.smallImg" alt="" @click="goDetail(item.pid)" />
              </div>
              <div class="coll-title">{{ item.name }}</div>
              <div class="coll-price"><span>￥</span>{{ item.price }}</div>
              <div class="coll-icon">
                <van-icon
                  name="delete"
                  size="14px"
                  @click="removeLikeProData(item.pid, index)"
                />
              </div>
            </div>
          </div>
          <van-empty description="目前没收藏东西哦!" v-if="isShow" />
        </Contentbox>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Collection",
  data() {
    return {
      toptitle: "我的收藏",
      likeProductData: [],
      isShow: true,
    };
  },
  created() {
    //获取用户收藏商品
    this.getlikeProductData();
  },
  methods: {
    getlikeProductData() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/findAllLike",
        params: {
          appkey: this.appKey,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 2000) {
            this.likeProductData = result.data.result;
            if (this.likeProductData.length <= 0) {
              this.isShow = true;
            } else {
              this.isShow = false;
            }
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    //常看商品详情
    goDetail(pid) {
       ;
      this.$router.push({ name: "Detall", params: { pid } });
    },
    //清除收藏
    removeLikeProData(pid, index) {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "POST",
        url: "/notlike",
        data: {
          appkey: this.appKey,
          pid,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            //token检验无效,则跳到登录页面
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 900) {
            this.$toast("删除成功");
            this.likeProductData.splice(index, 1);
            if (this.likeProductData.length <= 0) {
              this.isShow = true;
            } else {
              this.isShow = false;
            }
          } else {
            this.$toast("删除失败");
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
  },
  components: {
    Bgbox,
    Contentbox,
  },
};
</script>

<style lang="less" scoped>
.collection {
  img {
    width: 100%;
    display: block;
  }
  .collection-content {
    padding: 10px;
    box-sizing: border-box;
  }
  .coll-pro {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .pro-coll-item {
      min-width: 100px;
      max-width: 120px;
      overflow: hidden;
      flex: 1;
      position: relative;
      margin: 10px 10px;
    }
    .coll-title {
      color: #2e343d;
      font-weight: 700;
      padding: 4px 10px;
    }
    .coll-price {
      color: #e8b986;
      font-size: 14px;
      padding: 0px 10px;

      > span {
        font-size: 12px;
      }
    }
    .coll-icon {
      position: absolute;
      right: 4px;
      bottom: 4px;
      width: 20px;
      height: 20px;
      background-color: #4a6fe7;
      text-align: center;
      line-height: 21px;
      border-radius: 20px;
      font-size: 20px;
      color: white;
    }
  }
}
</style>