<template>
  <div class="order">
    <Bgbox :title="toptitle">
      <Contentbox>
        <van-tabs
          v-model="tabIndex"
          color="#0C34BA"
          title-active-color="#0C34BA"
          line-height="2"
        >
          <van-tab
            :title="item.title"
            v-for="(item, index) in tabData"
            :key="index"
          >
            <div>
                <Productitem></Productitem>
            </div>
          </van-tab>
        </van-tabs>
      </Contentbox>
    </Bgbox>
  </div>
</template>

<script>
import Probox from '../components/ProBox.vue';
import Productitem from '../components/Productitem.vue'
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/order.less";
export default {
  name: "Order",
  data() {
    return {
      toptitle: "我的订单",

      tabIndex:0,

      tabData: [{ title: "全部" }, { title: "进行中" }, { title: "已完成" }],
      
      orderData:[],

      isHas:true
      
    };
  },
  created() {},
  methods: {},
  components: {
    Bgbox,
    Contentbox,
    Productitem
  },
};
</script>

<style lang="less" scoped>
</style>