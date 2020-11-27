<template>
  <div class="my">
    <Bgbox :is-show="false">
        <div class="userhead">
          <div class="user-img" @click="goradom('Usersettings')">
            <img
              :src="userInfo"
              alt=""
            />
          </div>
          <div class="userinfo" @click="goradom('Usersettings')">
            <div class="username">{{ userInfo.nickName }}</div>
            <div class="userphone">{{ userInfo.phone }}</div>
            <div class="icon"><van-icon name="arrow" /></div>
          </div>
        </div>
        <div class="content">
          <div class="funitem" v-for="(item, index) in listData" :key="index">
            <van-cell
              :title="item.title"
              @click="goradom(item.name)"
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
        { title: "地址管理", icon: "location-o", name: "AddressList" },
        { title: "安全中心", icon: "setting-o", name: "Security" },
      ],
    };
  },
  created() {
    //获取用户数据
    // this.getUserInfo();
    this.getUserAddInfo();
  },
  methods: {
    goradom(data) {
      this.$router.push({ name: data });
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
    //获取用户手机号
    getUserAddInfo() {
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
        url: "/findAccountInfo",
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
          } else if (result.data.code == "B001") {
            this.userInfo = result.data.result[0];
             ;
          } else {
            this.$toast(result.data.msg);
          }
        })
        .catch((err) => {
          this.$toast.clear();
           ;
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