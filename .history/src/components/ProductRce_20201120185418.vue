<template>
  <div class="productrce">
    <div class="pro-rec-box">
          <div class="pro-rec-item">
            <div class="rec-img"><img :src="infoImg" alt="" @click="goDetail" /></div>
            <div class="rec-title">{{item.name}}</div>
            <div class="rec-price"><span>￥</span>{{item.price}}</div>
            <div class="rec-icon" @click="goDetail(item.pid)"><span>+</span></div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ProductRce",
  props: {
    infoImg: {
      type: String,
      default:
        "http://www.kangliuyong.com:10002/images/product_large/IMG_0389_02.jpg",
    },
    infotitle: {
      type: String,
      default: "商品名",
    },
    infoPrice: {
      type: String,
      default: "28.00",
    },
  },
  methods: {
    goDetail() {
      this.$emit("go-detail");
    },
  },
};
</script>

<style lang="less" scoped>
.productrce {
    img{
        width: 100%;
        display: block;
    }
  .pro-rec-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    .pro-rec-item {
      min-width: 100px;
      max-width: 120px;
      overflow: hidden;
      flex: 1;
      position: relative;
      margin: 10px 0px;
      .rec-img {
        width: 100px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 auto;
      }

      .rec-title {
        color: #2e343d;
        font-weight: 700;
        padding: 4px 10px;
      }

      .rec-price {
        color: #e8b986;
        font-size: 14px;
        padding: 0px 10px;

        > span {
          font-size: 12px;
        }
      }

      .rec-icon {
        position: absolute;
        right: 4px;
        bottom: 4px;
        width: 20px;
        height: 20px;
        background-color: #4a6fe7;
        text-align: center;
        line-height: 21px;
        border-radius: 20px;
        font-size: 20px;
        color: white;
      }
    }
  }
}
</style>