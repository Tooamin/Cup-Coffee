<template>
  <div class="my">
    <Bgbox :is-show="false">
      <div class="userhead">
        <div class="user-img">
          <img src="" alt="" />
        </div>
        <div class="userInfo">
          <div class="username">用户名</div>
          <div class="userphone">188188188188</div>
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
        userInfo:[],
        
    };
  },
  created() {},
  methods: {
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