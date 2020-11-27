<template>
  <div class="usersettings">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="funbox">
            1
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