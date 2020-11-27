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
        @delete="removeAddress"
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

    //根据地址aid查询地址数据
      this.getAddressDataAid();
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

      if (!this.aid) {
        //   新增地址
        this.address(addressInfo, "/addAddress");
      } else {
        //编辑
        let isModify = false;
        for (let key in this.addressInfo) {
          if (content[key] != this.addressInfo[key]) {
            isModify = true;
          }
        }

        if (isModify) {
          //编辑地址
          this.address(addressInfo, "/editAddress");
        } else {
          return this.$toast("请修改地址信息");
        }
      }
    },
    address(addressInfo, url) {
      this.axios({
        method: "POST",
        url,
        data: addressInfo,
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 9000 || result.data.code == 30000) {
            setTimeout(() => {
              this.$router.push({ name: "Address" });
            }, 800);
          }
          this.$toast(result.data.msg);
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    // 根据aid查询地址数据
    getAddressDataAid() {
         ;
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
        url: "/findAddressByAid",
        params: {
          appkey: this.appKey,
          tokenString,
          aid: this.aid,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 40000) {
            let data = result.data.result[0];
            data.isDefault = Boolean(data.isDefault);
            this.addressInfo = data;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    removeAddress() {
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
        method: "POST",
        url: "/deleteAddress",
        data: {
          appkey: this.appKey,
          tokenString,
          aid: this.aid,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 10000) {
            setTimeout(() => {
              this.$router.push({ name: "Address" });
            }, 800);
          }

          this.$toast(result.data.msg);
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
.newaddresslist {
  /deep/ .van-button--danger {
    background-color: #4a6fe7;
    border-color: #4a6fe7;
  }
}
</style>