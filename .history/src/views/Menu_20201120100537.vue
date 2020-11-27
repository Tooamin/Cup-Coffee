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
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
          </van-sidebar>
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
      activeKey:
    };
  },
  components: {
    Bgbox,
  },
  methods: {
    goradom(data) {
      this.$router.push({ name: data });
    },
  },
};
</script>