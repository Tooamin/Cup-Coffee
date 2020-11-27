<template>
  <div class="order">
    <Bgbox :title="toptitle">
      <Contentbox>
        <van-tabs
          v-model="tabIndex"
          color="#0C34BA"
          title-active-color="#0C34BA"
          line-height="2"
        >
          <van-tab
            :title="item.title"
            v-for="(item, index) in tabData"
            :key="index"
          >
            <div>
              <Probox v-for="(item,index) in orderData">
                <Productitem></Productitem>
              </Probox>
            </div>
          </van-tab>
        </van-tabs>
      </Contentbox>
    </Bgbox>
  </div>
</template>

<script>
import Probox from "../components/ProBox.vue";
import Productitem from "../components/Productitem.vue";
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/order.less";
export default {
  name: "Order",
  data() {
    return {
      toptitle: "我的订单",

      tabIndex: 0,

      tabData: [{ title: "全部" }, { title: "进行中" }, { title: "已完成" }],

      orderData: [],

      isHas: true,
    };
  },
  created() {
      //获取订单数据
      this.getOrderDataStatus();
  },
  methods: {
    changeTab(name, title) {
      //根据订单状态获取订单数据
      this.getOrderDataByStatus();
    },
    //根据订单状态获取订单数据
    getOrderDataStatus() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/findOrder",
        params: {
          appkey: this.appKey,
          tokenString,
          status: this.tabIndex,
        },
      })
        .then((result) => {
          this.$toast.clear();
          
          if (result.data.code == 700) {
            //token检验无效,则跳到登录页面
            this.$router.push({ name: "Login" });
          } else if (result.data.code == 70000) {

            //如果全部没有订单数据，则移除tab
            if (this.tabIndex == 0 && result.data.result.length == 0) {
              this.isHas = false;
              return;
            }


            let orderDatas = [];
            result.data.result.map((v) => {
              //查找orderDatas的订单数据，如果找到，则将该商品存放在当前订单里面，累加当前订单的商品数量和当前订单的总金额
              for (let i = 0; i < orderDatas.length; i++) {
                if (orderDatas[i].oid == v.oid) {
                  orderDatas[i].data.push(v);
                  orderDatas[i].count += v.count;
                  orderDatas[i].total += v.count * v.price;
                  return;
                }
              }
              //如果找不到当前订单数据，则初始化当前订单数据
              let o = {};
              o.oid = v.oid;
              o.count = v.count;
              o.total = v.count * v.price;
              o.status = v.status;
              o.date = v.createdAt;
              o.data = [v];
              orderDatas.push(o);
            });

            this.orderData = orderDatas;
             ;
          }
        }).catch((err) => {
          this.$toast.clear();
          
        });
    },
  },
  components: {
    Bgbox,
    Contentbox,
    Productitem,
    Probox,
  },
};
</script>

<style lang="less" scoped>
</style>