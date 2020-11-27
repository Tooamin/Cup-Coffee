<template>
  <div class="usersettings">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="funitem">
          <div class="title-head">头像</div>
          <div class="headPortrait">
            <img
              src="http://www.kangliuyong.com:10002/images/product_large/IMG_0389_02.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="funitem">
          <van-cell value="内容">
            <template #title>
              <span class="title-item">用户ID</span>
            </template>
          </van-cell>
          <van-cell value="内容">
            <template #title>
              <span class="title-item">手机号</span>
            </template>
          </van-cell>
          <van-cell value="内容">
            <template #title>
              <span class="title-item">用户ID</span>
            </template>
          </van-cell>
          <van-cell value="内容">
            <template #title>
              <span class="title-item">用户ID</span>
            </template>
          </van-cell>
        </div>
      </Contentbox>
    </Bgbox>
  </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/usersettings.less";
export default {
  namr: "Usersettings",
  data() {
    return {
      toptitle: "个人资料",
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