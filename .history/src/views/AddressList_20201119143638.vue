<template>
  <div class="addressList">
    <Bgbox :title="toptitle">
      <van-empty
        description="还没有地址哦,点新增地址新增吧!"
        v-if="list.length <= 0"
      />
      <div class="address-item">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
        />
      </div>
    </Bgbox>
  </div>
</template>

<script>
import "../assets/less/addresslist.less";
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "AddressList",
  data() {
    return {
      toptitle: "地址管理",
      chosenAddressId: "0",
      list: [],
    };
  },
  created(){
      //获取用户地址数据
      this.getAddressData();
  },
  components: {
    Bgbox,
  },
  methods: {
    getAddressData() {
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
        url: "/findAddress",
        params: {
          appkey: this.appKey,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            //token检验无效,则跳到登录页面
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 20000) {
            result.data.result.map((v) => {
              v.isDefault = Boolean(v.isDefault);
              v.id = v.aid;
              v.address = `${v.province}${v.city}${v.county}${v.addressDetail}`;
            });

            this.list = result.data.result;
             ;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>