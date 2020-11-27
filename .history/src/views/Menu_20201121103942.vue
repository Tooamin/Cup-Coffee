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
          <van-sticky :offset-top="sticky">
            <div class="pro-sidebar">
              <van-sidebar v-model="activeKey" @change="getSidebarIndex">
                <van-sidebar-item
                  :title="item.title"
                  v-for="(item, index) in sidebarData"
                  :key="index"
                />
              </van-sidebar>
            </div>
          </van-sticky>
          <div class="product-rec">
            <ProductRce
              v-for="(item, index) in productData"
              :key="index"
              :info-img="item.smallImg"
              :info-title="item.name"
              :info-price="item.price"
              @go-detail="goDateil(item.pid)"
            ></ProductRce>
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
    //获取推荐商品
    this.getProrecData();
  },
  components: {
    Bgbox,
    ProductRce,
  },
  methods: {
    getSidebarIndex(index) {
      this.activeKey = index;

      let typedata = [" ", "latte", "coffee", "rena_ice"];
      let value = typedata[index];

      if (index == 0) {
        this.getProrecData();
        return;
      }

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
          if (result.data.code == 500) {
            this.productData = result.data.result;
          }
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
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    getProrecData() {
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
          key: "isHot",
          value: 1,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 500) {
            this.productData = result.data.result;
          }
        })
        .catch((err) => {
           ;
        });
    },
    goDateil(pid) {
      this.$router.push({ name: "Detall", params: { pid } });
    },
  },
};
</script>