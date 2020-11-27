<template>
  <div class="my">
    <Bgbox :is-show="false">
      <div class="userhead">
        <div class="user-img">
          <img
            src="http://www.kangliuyong.com:10002/assets/default.png"
            alt=""
          />
        </div>
        <div class="userinfo">
          <div class="username">{{ userInfo.nickName }}</div>
          <div class="userphone">188188188188</div>
          <div class="icon"></div>
        </div>
      </div>
      <div class="content">
        <div class="funitem" v-for="(item, index) in listData" :key="index">
          <van-cell
            :title="item.title"
            @click="gofunction(item.go)"
            :icon="item.icon"
          >
            <template #right-icon>
              <van-icon name="arrow" />
            </template>
          </van-cell>
        </div>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/my.less";
export default {
  name: "My",
  data() {
    return {
      userInfo: {},
      listData: [
        { title: "我的订单", icon: "orders-o", name: "Order" },
        { title: "我的收藏", icon: "star-o", name: "Collection" },
        { title: "咖啡钱包", icon: "cash-on-deliver", name: "Wallet" },
        { title: "地址管理", icon: "location-o", name: "nameAddress" },
        { title: "安全中心", icon: "setting-o", name: "nameSecurity" },
      ],
    };
  },
  created() {
    //获取用户数据
    this.getUserInfo();
  },
  methods: {
    //   绑定点击事件
    gofunction(item) {
      this[item]();
    },
    goOrder() {
      this.$router.push({name:'Order'});
    },
    goCollection(){
        this.$router.push({name:'Collection'});
    },
    goWallet(){
         ;
    },
    goAddress(){
        this.$toast.push({name:''});
    },
    goSecurity(){
         ;
    },
    //获取用户信息
    getUserInfo() {
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
        url: "/findMy",
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
          } else if (result.data.code == "A001") {
            this.userInfo = result.data.result[0];
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
  },
  components: {
    Bgbox,
  },
};
</script>

<style lang="less" scoped>
</style>