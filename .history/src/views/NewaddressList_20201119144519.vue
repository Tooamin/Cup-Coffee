<template>
  <div class="newaddresslist">
    <Bgbox :title="toptitle">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
      />
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "NewaddressList",
  data() {
    return {
      toptitle: "新增地址",
    };
  },
  components: {
    Bgbox,
  },
};
</script>

<style lang="less" scoped>
</style>