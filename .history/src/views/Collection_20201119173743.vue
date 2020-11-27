<template>
  <div class="collection">
    <Bgbox :title="toptitle">
      <div class="collection-content">
        <Contentbox></Contentbox>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Contentbox from '../components/Contentbox.vue';
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Collection",
  data() {
    return {
      toptitle: "我的收藏",
    };
  },
  created() {},
  methods: {},
  components: {
    Bgbox,
    Contentbox
  },
};
</script>

<style lang="less" scoped>
.collection {
  .collection-content {
    padding: 10px;
    box-sizing: border-box;
    
  }
}
</style>