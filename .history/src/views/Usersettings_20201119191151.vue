<template>
  <div class="usersettings">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="funitem">
          <van-cell
            :title="item.title"
            @click="goradom(item.name)"
            :icon="item.icon"
          >
            <template #right-icon>
              <van-icon name="arrow" />
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