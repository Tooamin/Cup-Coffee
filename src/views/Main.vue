<template>
  <div class="main">
    <router-view></router-view>

    <van-tabbar
      v-model="activeName"
      route
      inactive-color="#646566"
      active-color="#0C34BA"
    >
      <van-tabbar-item
        :icon="item.icon"
        v-for="(item, index) in tabbarData"
        :key="index"
        :name="item.name"
        replace
        :to="item.path"
      >
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.activeImg : item.inactiveImg" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      activeName: "Home",

      tabbarData: [
        {
          title: "首页",
          icon: "home-o",

          //标签名称、路由名称
          name: "Home",

          path: "/main/home",

          inactiveImg: require("../assets/images/home.png"),
          activeImg: require("../assets/images/home_active.png"),
        },
        {
          title: "菜单",
          icon: "search",
          name: "Menu",
          path: "/main/menu",
          inactiveImg: require("../assets/images/menu.png"),
          activeImg: require("../assets/images/menu_active.png"),
        },
        {
          title: "购物袋",
          icon: "friends-o",
          name: "Shopbag",
          path: "/main/shopbag",
          inactiveImg: require("../assets/images/shopbag.png"),
          activeImg: require("../assets/images/shopbag_active.png"),
        },
        {
          title: "我的",
          icon: "setting-o",
          name: "My",
          path: "/main/my",
          inactiveImg: require("../assets/images/my.png"),
          activeImg: require("../assets/images/my_active.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  padding-bottom:50px ;
  box-sizing: border-box;
  z-index: 99;
}
</style>