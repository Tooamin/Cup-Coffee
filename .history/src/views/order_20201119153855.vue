<template>
  <div class="order">
    <Bgbox :title="toptitle">
      <Contentbox>
        <van-tabs
          v-model="tabIndex"
          color="#0C34BA"
          title-active-color="#0C34BA"
          line-height="2"
          @change="changeTab"
        >
          <van-tab
            :title="item.title"
            v-for="(item, index) in tabData"
            :key="index"
          >
          
          </van-tab>
        </van-tabs>
      </Contentbox>
    </Bgbox>
  </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/order.less";
export default {
  name: "Order",
  data() {
    return {
      toptitle: "我的订单",
      tabData: [{ title: "全部" }, { title: "进行中" }, { title: "已完成" }],
    };
  },
  created() {},
  methods: {},
  components: {
    Bgbox,
    Contentbox,
  },
};
</script>

<style lang="less" scoped>
</style>