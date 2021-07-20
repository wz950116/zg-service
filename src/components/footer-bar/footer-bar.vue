<template>
  <div class="footer-bar">
    <div class="nav">
      <div class="home" @click="tabClick('/')"></div>
      <div :class="['nav-item', { 'active': item.name === ($route.meta && $route.meta.name) }]" v-for="item in navList" :key="item.name" @click="tabClick(item.path)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [{
        name: '业务指导',
        path: 'business-guide'
      }, {
        name: '监督管理',
        path: ''
      }, {
        name: '综合评价',
        path: ''
      }, {
        name: '公共服务',
        path: 'public-service'
      }, {
        name: '长三角一体化执法',
        path: ''
      }]
    }
  },
  methods: {
    tabClick(path) {
      if (path && path !== this.$route.name) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-bar {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 620px;
  height: 125px;
  line-height: 175px;
  padding: 0 40px;
  background: url('../../common/image/public/footer-nav.png') no-repeat center;
  background-size: cover;
  margin-left: -310px;
  z-index: 1999;

  .nav {
    position: relative;
    display: flex;
    justify-content: space-around;
    .home {
      position: absolute;
      left: -90px;
      top: 66px;
      width: 70px;
      height: 54px;
      background: url('../../common/image/public/home.png') no-repeat center;
      background-size: cover;
      cursor: pointer;
    }
    .nav-item {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.80);
      cursor: pointer;
      &.active {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #0dc6ff;
      }
      &:hover {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #0dc6ff;
      }
    }
  }
}
</style>
