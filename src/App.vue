<template>
  <div id="app" :class="{ home: $route.name === 'general-view', integrated: $route.name === 'integrated-law' }">
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
.home {
  background: #000037 url('./common/image/general-view/bg.png') no-repeat center;
  background-size: cover;
}
.integrated {
  background: #000037 url('./common/image/integrated-law/bg.png') no-repeat center;
  background-size: cover;
}
</style>