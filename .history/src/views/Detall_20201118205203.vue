<template>
  <div class="detall">
    <div class="pro-img">
      <img
        src="http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg"
        alt=""
      />
      <div class="img-title">
        <div class="title-name">{{productData.name}}</div>
        <div class="title-subname">{{}}</div>
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
        <div class="tem-box" v-for="(item,index) in productData.rules" :key="index">
          <div class="title">{{item.title}}</div>
        <div class="temperature">
          <div class="temp-item" v-for="(item,index) in item.rule" :key="index">
            <span class="text">{{item.title}}</span>
          </div>
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
      productData: [],
    };
  },
  created() {
    //商品的id
    this.pid = this.$route.params.pid;

    //获取商品详情
    this.getProductDetailData();
  },
  methods: {
    // 获取选中的下标
    getSpecIndex(index) {
      this.specItemIndex = index;
    },

    //获取商品详情数据
    getProductDetailData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/productDetail",
        params: {
          appkey: this.appKey,
          pid: this.pid,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 600) {
            let data = result.data.result[0];

            data.desc = data.desc.split(/\n/);

            let res = [];
            let resData = ["tem", "sugar", "milk", "cream"];

            resData.map((v) => {
              let r = {};

              r.title = data[v + "_desc"];

              r.resIndex = 0;
              r.rule = [];

              let ruleString = data[v].split("/");
              ruleString.map((value) => {
                if (value != "") {
                  r.rule.push({ title: value });
                }
              });
              if (r.rule.length > 0) {
                res.push(r);
              }
            });

            data.rules = res;

            this.productData = data;
             ;
          }
        })
        .catch((err) => {
           ;
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>