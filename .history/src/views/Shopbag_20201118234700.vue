<template>
  <div class="shopbag">
    <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    <!-- <div v-if="shopbagData.length == 0" class="empty-show">
      <van-empty description="购物袋空空如也，去逛一逛!">
        <van-button round color="#0C34BA" class="bottom-button" @click="gorouter('Home')">
          逛一逛
        </van-button>
      </van-empty>
    </div> -->
    <div class="shopbag-pro">
      <div class="topnav">
        <div class="clear"><van-icon name="delete" />清空</div>
      </div>
      <div class="shopbag-item">
        <van-swipe-cell>
          <div class="checkbox"><van-checkbox v-model="checked">复选框</van-checkbox></div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
            />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/less/shopbag.less";
export default {
  name: "Shopbag",
  data() {
    return {
      shopbagData: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    gorouter(data) {
      this.$router.push({ name: data });
    },
  },
};
</script>