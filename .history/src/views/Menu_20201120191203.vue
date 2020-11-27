<template>
  <div class="menu">
    <Bgbox :title="toptitle">
      <div class="content">
        <van-sticky>
          <div class="search">
            <van-search
              v-model="name"
              placeholder="请输入你想搜索的商品"
              @click="goradom('Search')"
            />
          </div>
        </van-sticky>
        <div class="pro-content">
          <div class="pro-sidebar">
            <van-sticky :offset-top="sticky">
              <van-sidebar v-model="activeKey" @change="getSidebarIndex">
                <van-sidebar-item
                  :title="item.title"
                  v-for="(item, index) in sidebarData"
                  :key="index"
                />
              </van-sidebar>
            </van-sticky>
          </div>
          <div class="product-rec">
            <ProductRce></ProductRce>
          </div>
        </div>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import ProductRce from "../components/ProductRce.vue";
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
      sticky: "30%",
      sidebarData: [
        {
          title: "每日推荐",
        },
        {
          title: "拿铁",
        },
        {
          title: "咖啡",
        },
        {
          title: "瑞纳冰",
        },
      ],
    };
  },
  created() {
    //商品类型
    this.getProductType();
  },
  components: {
    Bgbox,
    ProductRce,
  },
  methods: {
    getSidebarIndex(index) {
      this.activeKey = index;
      let typedata = [" ","latte", "coffee", "rena_ice"];
      let value = typedata[index];
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/typeProducts",
        params: {
          appkey: this.appKey,
          key: "type",
          value,
        },
      })
        .then((result) => {
          this.$toast.clear();
           ;
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
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
      })
        .then((result) => {
          this.$toast.clear();
           ;
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
  },
};
</script>