<template>
  <div class="home">
    <div class="toptile">
      <div class="logotitle">
        <div class="logo-img">
          <img src="../assets/images/home_active.png" alt="" />
        </div>
        <div class="title">Lukin Coffee</div>
      </div>
      <div class="right-name">
        <span>用户名</span>
      </div>
    </div>
    <div class="banner">
      <van-swipe>
        <van-swipe-item v-for="(item,index) in bannerData" :key="index">
          
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import "../assets/less/home.less";
export default {
  name: "Home",
  data(){
    return{
      currentIndex:0,
      bannerData:[],

    }
  },
  created() {

  },
  methods: {
    changeBannerIndex(index){
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
