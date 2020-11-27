<template>
  <div class="addressList">
    <Bgbox :title="toptitle">
      <van-empty description="描述文字" v-if="list.length <= 0" />
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
      list: [
        (id: "1"),
        (name: "张三"),
        (tel: "13000000000"),
        (address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"),
        (isDefault: true),
      ],
    };
  },
  components: {
    Bgbox,
  },
};
</script>

<style lang="less" scoped>
</style>