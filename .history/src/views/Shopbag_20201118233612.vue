<template>
  <div class="shopbag">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <div v-if="shopbagData.length == 0" class="empty-show">
      <van-empty description="购物袋空空如也，去逛一逛!">
        <van-button round color="#0C34BA" class="bottom-button">
          逛一逛
        </van-button>
      </van-empty>
    </div>
    <div class="bag-box" v-if="!shopbagData.length == 0">
        <div class="topnav">
            <div class="clear"><van-icon name="delete" />清空</div>
        </div>

    </div>
  </div>
</template>
<script>
import "../assets/less/shopbag.less";
export default {
  name: "Shopbag",
  data(){
      return {
          shopbagData:[{title:"111"}],
      }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>