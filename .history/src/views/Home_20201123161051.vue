<template>
  <div class="home">
    <div class="banner">
      <van-swipe @change="changeBannerIndex" loop>
        <van-swipe-item v-for="(item, index) in bannerData" :key="index">
          <img :src="item.bannerImg" alt="" @click="goDetail(item.pid)" />
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
          <div class="left-box">{{timertitle}}</div>
          <div class="right-box">
            <div class="title">
              <span>Hi,{{ userInfo.nickName }}<span v-if="userInfo.nickName.length <= 0">请先登录</span></span>
            </div>
            <div class="subtitle"><span>咖啡会让你脑洞大开哟!</span></div>
          </div>
        </div>
        <div class="fun-box">
          <div class="fun-item" @click="goradom('Shopbag')">
            <div class="fun-img">
              <img src="../assets/images/xianzaixiadan.png" alt="" />
            </div>
            <div class="fun-title">现在下单</div>
          </div>
          <div class="fun-item" @click="goradom('Wallet')">
            <div class="fun-img">
              <img src="../assets/images/kafeiqianbao.png" alt="" />
            </div>
            <div class="fun-title">咖啡钱包</div>
          </div>
          <div class="fun-item" @click="goradom('Menu')">
            <div class="fun-img">
              <img src="../assets/images/songcoffee.png" alt="" />
            </div>
            <div class="fun-title">送TA咖啡</div>
          </div>
        </div>
        <div class="title-text">今日推荐</div>
        <div class="pro-rec-box">
          <div
            class="pro-rec-item"
            v-for="(item, index) in hotProductData"
            :key="index"
          >
            <div class="rec-img">
              <img :src="item.smallImg" alt="" @click="goDetail(item.pid)" />
              <span class="img-icon">Hot</span>
            </div>
            <div class="rec-title">{{ item.name }}</div>
            <div class="rec-price"><span>￥</span>{{ item.price }}</div>
            <div class="rec-icon" @click="goDetail(item.pid)">
              <span>+</span>
            </div>
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
      hotProductData: [],
      userInfo: [],
      timertitle:'',
    };
  },
  created() {
    //获取轮播图
    this.getBannerData();
    //获取推荐商品
    this.getProrecData();

    //获取用户信息
    this.getUserInfo();
    //时间
    this.getTimes();
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
        method: "GET",
        url: "/banner",
        params: {
          appkey: this.appKey,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 300) {
            this.bannerData = result.data.result;
          }
        })
        .catch((err) => {
           ;
        });
    },
    //获取推荐商品
    getProrecData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/typeProducts",
        params: {
          appkey: this.appKey,
          key: "isHot",
          value: 1,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 500) {
            this.hotProductData = result.data.result;
          }
        })
        .catch((err) => {
           ;
        });
    },
    goDetail(pid) {
      this.$router.push({ name: "Detall", params: { pid } });
    },
    goradom(data) {
       ;
      this.$router.push({ name: data });
    },
    getUserInfo() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("token错误");
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/findMy",
        params: {
          appkey: this.appKey,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == "A001") {
            this.userInfo = result.data.result[0];
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    getTimes() {
      let time = new Date();
      let o = {
        M: time.getMonth() + 1,
        d: time.getDate(),
        h: time.getHours(),
        m: time.getMinutes(),
        s: time.getSeconds(),
      };

      if(o.h <= 12){
        this.timertitle = "早上好!";
      }else if(o.h > 12 && o.h <= 18){
        this.timertitle = "下午好!";
      }else if(o.h > 18 && o.h <= 24){
        this.timertitle = "晚上好!";
      }else if(o.h > 24 && o.h <= 6){
        this.timertitle = "深夜了.";
      }
    },
  },
};
</script>
