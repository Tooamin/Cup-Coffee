<template>
  <div id="app">
    <keep-alive include="Home,Menu,My">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
#app,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
