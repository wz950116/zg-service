<template>
  <div class="header-bar">
    <div class="nav-left">{{ $route.meta && $route.meta.name }}</div>
    <div class="nav-center">浙江省综管服务平台·数字驾驶舱</div>
    <div class="nav-right">
      <div class="time">{{ currentTime }}</div>
      <div class="date">
        <div>{{ currentDay }}</div>
        <div>{{ currentDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/common/js/utils'
export default {
  data() {
    return {
      currentTime: formatTime(new Date(), 'hh:mm:ss'),
      currentDate: formatTime(new Date(), 'yyyy.MM.dd'),
      currentDay: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()],
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = formatTime(new Date(), 'hh:mm:ss')
      this.currentDate = formatTime(new Date(), 'yyyy.MM.dd')
      this.currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
    }, 1000)
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timer)
    })
  },
  methods: {
    logout() {
      this.$emit('logout')
      if (window.eventBus) {
        window.eventBus.$emit('logout')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 107px;
  text-align: center;
  background: url('../../common/image/public/top_bg.png') no-repeat center -9px;
  background-size: cover;
  z-index: 1;

  .nav-left {
    position: absolute;
    left: 40px;
    top: 40px;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #0dc6ff;
  }

  .nav-center {
    line-height: 85px;
    background: linear-gradient(180deg, #d8f4fc 20%, #25a4ff 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 38px;
    font-family: Fontquan, Fontquan-Regular;
    font-weight: 400;
    color: #44caff;
    letter-spacing: 5px;
    text-shadow: 0px 0px 24px rgba(0, 152, 255, 0.8), 0px 0px 0px 1px rgba(255, 255, 255, 0.6) inset;
  }

  .nav-right {
    float: right;
    margin-right: 30px;
    margin-top: -40px;

    .time {
      float: left;
      margin-right: 12px;
      font-size: 28px;
      font-family: Roboto, Roboto-Medium;
      font-weight: 500;
      color: #0dc6ff;
      line-height: 36px;
    }

    .date {
      float: right;
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #0dc6ff;
      line-height: 18px;
    }
  }
}
</style>