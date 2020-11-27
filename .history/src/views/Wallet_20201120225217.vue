<template>
  <div class="wallet">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="cardvoucher">
          <div class="cardvoucher-item">
            <div class="price-title">
              <span class="money-icon">￥</span>
              34
              
            </div>
            <div class="title-name">
              <div class="name">全国通用券</div>
              <div class="icon"></div>
            </div>
            <div class="cardvoucher-count">
              <van-stepper
                v-model="count"
                theme="round"
                button-size="20"
                disable-input
              />
            </div>
          </div>
        </div>
      </Contentbox>
    </Bgbox>
  </div>
</template>

<script>
import '../assets/less/wallet.less'
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Wallet",
  components: {
    Bgbox,
    Contentbox,
  },
  data() {
    return {
      toptitle: "咖啡钱包",
      count:0
    };
  },
  created() {},
};
</script>

<style lang="less" scoped>
</style>