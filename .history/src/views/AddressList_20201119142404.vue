<template>
  <div class="addressList">
    <Bgbox :title="toptitle">
      <div class="address-item">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          :disabled-list="disabledList"
          disabled-text="以下地址超出配送范围"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "AddressList",
  data() {
    return {
      toptitle: "地址管理",
    };
  },
  components: {
    Bgbox,
  },
};
</script>

<style lang="less" scoped>
</style>