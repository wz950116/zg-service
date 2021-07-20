<template>
  <div id="app">
    <!-- 共通头部 -->
    <header-bar></header-bar>

    <router-view></router-view>

    <!-- 共同底部 -->
    <footer-bar v-show="$route.name !== 'general-view'"></footer-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  provide() {
    return {
      app: this
    }
  }
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: "Michroma";
  src: local('☺'), url('./common/font/Michroma.210420-1641.ttf') format('truetype');
}
@font-face {
  font-family: "Fontquan";
  src: local('☺'), url('./common/font/字体圈欣意冠黑体.ttf') format('truetype');
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
</style>