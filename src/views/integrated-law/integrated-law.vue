<template>
  <div class="integrated-law">
    <div class="left-content">
      <div class="combine-law">
        <h1>联合执法</h1>
        <div class="statistics">
          <label-value-show label="本月立案数量" :value="25"></label-value-show>
          <label-value-show label="今日处置结案率" value="95%"></label-value-show>
          <label-value-show label="本月重大事件" :value="3"></label-value-show>
        </div>
      </div>
      <div class="combine-law-trend">
        <h1 class="arrow-title">联合执法事件趋势</h1>
        <div ref="combineLawTrend" id="combine-law-trend"></div>
      </div>
      <div class="base-device">
        <h1 class="arrow-title">联合执法高频事件</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { combineLawTrend } from '@/common/echarts/integrated-law'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      combineLawTrend(this.$refs.combineLawTrend)
    }
  }
}
</script>

<style lang="scss" scoped>
.integrated-law {
  position: relative;
  h1 {
    background: linear-gradient(180deg, #d8f4fc 20%, #25a4ff 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    font-family: Fontquan, Fontquan-Regular;
    font-weight: 400;
    color: #44caff;
    letter-spacing: 3px;
    text-shadow: 0px 0px 20px rgba(0, 152, 255, 0.8);
    &.arrow-title {
      font-size: 18px;
      margin-top: 24px;
      margin-bottom: 12px;
      &::before {
        display: inline-block;
        vertical-align: top;
        content: '';
        border: 4px solid transparent;
        border-left-color: #0dc6ff;
        margin-right: 6px;
        margin-top: 6px;
      }
    }
  }
  .left-content {
    position: absolute;
    left: 30px;
    top: 107px;
    width: 460px;
    height: 934px;
    padding: 29px;
    background: url('../../common/image/public/bg-border_1.png') no-repeat center;
    background-size: cover;
    overflow-y: auto;
    .combine-law {
      .statistics {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        & > div {
          width: calc(100% / 3);
          text-align: center;
        }
      }
    }
    .combine-law-trend {
      #combine-law-trend {
        width: 100%;
        height: 200px;
      }
    }
  }
  .right-content {
    position: absolute;
    right: 30px;
    top: 107px;
    width: 460px;
    height: 934px;
    padding: 29px;
    background: url('../../common/image/public/bg-border_1.png') no-repeat center;
    background-size: cover;
    overflow-y: auto;
  }
}
</style>