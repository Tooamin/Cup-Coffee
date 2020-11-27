<template>
  <div class="addressList">
    <van-empty description="描述文字" />
    <Bgbox :title="toptitle">
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
      chosenAddressId: "1",
      list: [],
    };
  },
  components: {
    Bgbox,
  },
};
</script>

<style lang="less" scoped>
</style>