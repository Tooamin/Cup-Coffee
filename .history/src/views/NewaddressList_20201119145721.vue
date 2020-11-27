<template>
  <div class="newaddresslist">
    <Bgbox :title="toptitle">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="save"
      />
    </Bgbox>
  </div>
</template>

<script>
import areaList from "../assets/js/area";
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "NewaddressList",
  data() {
    return {
      toptitle: "新增地址",

      addressInfo: {},
      areaList,
      aid: "",
    };
  },
  created() {
    this.aid = this.$route.query.aid;

    //   判断有没有数据
    if (this.aid) {
    }
  },
  methods: {
    save(content) {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      let addressInfo = Object.assign({}, content);

      delete addressInfo.country;

      addressInfo.tokenString = tokenString;
      addressInfo.appkey = this.appKey;
      addressInfo.isDefault = Number(addressInfo.isDefault);

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      if(!this.aid){
        //   新增地址
          this.address(addressInfo,"/addAddress");
      }else{

      }
    },
  },
  components: {
    Bgbox,
  },
};
</script>

<style lang="less" scoped>
.newaddresslist {
  /deep/ .van-button--danger {
    background-color: #4a6fe7;
    border-color: #4a6fe7;
  }
}
</style>