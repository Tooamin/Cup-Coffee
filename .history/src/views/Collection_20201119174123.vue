<template>
  <div class="collection">
    <Bgbox :title="toptitle">
      <div class="collection-content">
        <Contentbox>
          <div class="coll-pro">
            <div
              class="pro-coll-item"
            >
              <div class="coll-img"><img src="http://www.kangliuyong.com:10002/images/product_large/IMG_0389_02.jpg" alt="" /></div>
              <div class="coll-title">名</div>
              <div class="coll-price"><span>￥</span>28.00</div>
              <div class="coll-icon">
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
    .coll-pro{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }
  }
}
</style>