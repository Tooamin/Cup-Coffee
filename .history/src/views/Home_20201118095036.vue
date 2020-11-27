<template>
  <div class="home">
    <div class="banner">
      <van-swipe @change="changeBannerIndex" loop>
        <van-swipe-item v-for="(item, index) in bannerData" :key="index">
          <img :src="item.bannerImg" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <div
              class="item"
              v-for="(item, index) in bannerData"
              :key="index"
              :class="{ 'item-active': index == currentIndex }"
            ></div>
          </div>
        </template>
      </van-swipe>
    </div>
    <div class="main-content">
      <div class="content-box">
        <div class="toptitle">
          <div class="left-box">定位</div>
          <div class="right-box">
            <div class="title"><span>Hi,Jack</span></div>
            <div class="subtitle"><span>咖啡会让你脑洞打开哟</span></div>
          </div>
        </div>
        <div class="fun-box">
          <div class="fun-item">
            
          </div>
          <div class="fun-item">

          </div>
          <div class="fun-item">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/home.less";
export default {
  name: "Home",
  data() {
    return {
      currentIndex: 0,
      bannerData: [],
    };
  },
  created() {
    //获取轮播图
    this.getBannerData();
  },
  methods: {
    changeBannerIndex(index) {
      this.currentIndex = index;
    },
    //轮播图
    getBannerData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      //发起注册请求
      this.axios({
        //请求类型
        method: "GET",
        //请求路径
        url: "/banner",

        //GET请求参数, object
        params: {
          appkey: this.appkey,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 300) {
            this.bannerData = result.data.result;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
  },
};
</script>
