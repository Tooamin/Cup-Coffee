<template>
  <div class="detall">
    <div class="pro-img">
      <img
        src="http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg"
        alt=""
      />
      <div class="img-title">
        <div class="title-name">{{ productData.name }}</div>
        <div class="title-subname">{{ productData.enname }}</div>
      </div>
      <div class="like-box">
        <div class="like-icon"><van-icon name="like" /></div>
        <div class="like-title">喜欢</div>
      </div>
    </div>
    <div class="introduce">
      <div class="introduce-box">
        <div class="close-icon" @click="goBack"><van-icon name="cross" /></div>
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
        <div class="rule-box">
          <div
            class="rule-items"
            v-for="(item, index) in productData.rules"
            :key="index"
          >
            <div class="title">{{ item.title }}</div>
            <div class="temperature">
              <div
                class="temp-item"
                :class="{
                  'bg-box': item.ruleIndex == i,
                  'large-text': v.title.length >= 4,
                }"
                v-for="(v, i) in item.rule"
                :key="i"
                @click="toggleRule(item, i)"
              >
                {{ v.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="productintroduction">
          <div class="title">介绍</div>
          <div class="introduction-item" v-for="(item,index) in productData.desc" :key="index">{{index+1}}.{{item}}</div>
        </div>
        <div class="buttom-box">
        <div class="procount"><van-stepper v-model="product.count"  button-size="40px"/></div>
        <div class="shopbtn">
          <div class="shop-icon"><van-icon name="shopping-cart-o" /></div>
        </div>
        <div class="joinshop">
          <van-button color="#0c34ba"><span class="text">加入购物车</span><span class="price">￥{{productData.price}}</span></van-button>
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
      productData: {},
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
    toggleRule(item, i) {
      if (item.ruleIndex == i) {
        return;
      }

      item.ruleIndex = i;
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

            let rules = [];

            let ruleData = ["tem", "sugar", "milk", "cream"];
            ruleData.map((v) => {
              let r = {};
              r.title = data[v + "_desc"];

              //激活下标
              r.ruleIndex = 0;

              //每项规格
              r.rule = [];

              //获取规格字符串
              let ruleString = data[v].split("/");
              ruleString.map((value) => {
                if (value != "") {
                  r.rule.push({ title: value });
                }
              });

              if (r.rule.length > 0) {
                rules.push(r);
              }
            });
            data.rules = rules;
            this.productData = data;
            console.table(this.productData);
          }
        })
        .catch((err) => {
           ;
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
</style>