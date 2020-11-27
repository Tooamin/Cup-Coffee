<template>
  <div class="main">
    <div>
      <router-link></router-link>
    </div>
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
</style>