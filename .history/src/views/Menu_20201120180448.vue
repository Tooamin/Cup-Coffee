<template>
  <div class="menu">
    <Bgbox :title="toptitle">
      <div class="content">
        <div class="search">
          <van-search
            v-model="name"
            placeholder="请输入你想搜索的商品"
            @click="goradom('Search')"
          />
        </div>
        <div class="pro-content">
          <div class="pro-sidebar">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="标签名称" />
              <van-sidebar-item title="标签名称" />
              <van-sidebar-item title="标签名称" />
            </van-sidebar>
          </div>
          <div class="product-rec">1</div>
        </div>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/menu.less";
export default {
  name: "Menu",
  data() {
    return {
      toptitle: " ",
      name: "",
      productData: [],
      activeKey: 0,
    };
  },
  components: {
    Bgbox,
  },
  methods: {
    goradom(data) {
      this.$router.push({ name: data });
    },
    getProductType() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

       this.axios({
        method: "GET",
        url: "/type",
        params: {
          appkey: this.appKey,
        },
       }).then((result) => {
         this.$toast.clear();
          ;
       })
    },
  },
};
</script>