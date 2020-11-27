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
      chosenAddressId: "",
      list: [],
    };
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
    },
  },
};
</script>

<style lang="less" scoped>
</style>