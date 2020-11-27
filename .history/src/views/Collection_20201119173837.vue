<template>
  <div class="collection">
    <Bgbox :title="toptitle">
      <div class="collection-content">
        <Contentbox>
          <div class="coll-pro">
            <div
              class="pro-rec-item"
              v-for="(item, index) in hotProductData"
              :key="index"
            >
              <div class="rec-img"><img :src="item.smallImg" alt="" /></div>
              <div class="rec-title">{{ item.name }}</div>
              <div class="rec-price"><span>￥</span>{{ item.price }}</div>
              <div class="rec-icon" @click="goDetail(item.pid)">
                <span>+</span>
              </div>
            </div>
          </div>
        </Contentbox>
      </div>
    </Bgbox>
  </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
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
    Contentbox,
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