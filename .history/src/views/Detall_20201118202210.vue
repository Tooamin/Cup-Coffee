<template>
  <div class="detall">
    <div class="pro-img">
      <img
        src="http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg"
        alt=""
      />
      <div class="img-title">
        <div class="title-name">摩卡</div>
        <div class="title-subname">Mocha</div>
      </div>
      <div class="like-box">
        <div class="like-icon"><van-icon name="like" /></div>
        <div class="like-title">喜欢</div>
      </div>
    </div>
    <div class="introduce">
      <div class="introduce-box">
        <div class="close-icon"><van-icon name="cross" /></div>
        <div class="title">规格</div>
        <div class="specifications-box">
          <div
            class="spec-item"
            v-for="(item, index) in specItemData"
            :key="index"
            @click="getSpecIndex(index)"
            :class="{ 'bg-index': index == specItemIndex }"
          >
            <div class="spec-img">
              <img :src="item.specImg" alt="" />
            </div>
            <div class="spec-title">{{ item.title }}</div>
            <div class="spec-ml">{{ item.ml }}</div>
          </div>
        </div>
        <div class="title">温度</div>
        <div class="temperature">
          <div class="temp-item">
            <span class="text">热</span>
          </div>
          <div class="temp-item">
            <span class="text">热</span>
          </div>
          <div class="temp-item">
            <span class="text">热</span>
          </div>
        </div>
        <div class="title">糖度</div>
        <div class="temperature">
          <div class="temp-item">
            <span class="text">全糖</span>
          </div>
          <div class="temp-item">
            <span class="text">热</span>
          </div>
          <div class="temp-item">
            <span class="text">热</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/detall.less";
export default {
  name: "Detall",
  data() {
    return {
      specItemIndex: 1,
      specItemData: [
        {
          title: "中杯",
          specImg: require("../assets/images/xiaobei2x.png"),
          ml: "355ml",
        },
        {
          title: "大杯",
          specImg: require("../assets/images/zhongbei2x.png"),
          ml: "475ml",
        },
        {
          title: "超大杯",
          specImg: require("../assets/images/dabei2x.png"),
          ml: "595ml",
        },
      ],
      pid: "",
      product: {
        count: 1,
      },
    };
  },
  created(){
    //商品的id
    this.pid = this.$route.params.pid;

    //获取商品详情
  },
  methods: {
    // 获取选中的下标
    getSpecIndex(index) {
      this.specItemIndex = index;
       ;
    },

    //获取商品详情数据
    getProductDetailData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      
      this.axios({
        method:'GET',
        url:'/productDetail',
        params:{
          appkey:this.appKey,
          pid:this.pid
        }
      }).then((result) =>{
        this.$toast.clear();
         ;
        
      }).catch((err) =>{
         ;
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>