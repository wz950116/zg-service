<template>
  <div class="supervision-management">
    <div class="left-content">
      <div class="clean">
        <h1>干净</h1>
        <div class="env-setting">
          <h1 class="arrow-title">环卫设置</h1>
          <div class="statistics">
            <label-value-show label="公厕设置密度" :value="3.1" unit="座/平方公里"></label-value-show>
            <label-value-show label="垃圾收集站覆盖率" :value="1.5" unit="%"></label-value-show>
            <label-value-show label="小型垃圾压缩收集站覆盖率" :value="80" unit="%"></label-value-show>
            <label-value-show label="生活垃圾分类覆盖率" :value="80" unit="%"></label-value-show>
            <label-value-show label="生活垃圾处理能力" :value="1.5" format="thousand"></label-value-show>
            <label-value-show label="餐厨垃圾处理能力" :value="1.5" unit="吨/万人"></label-value-show>
          </div>
          <h1 class="arrow-title">环卫设施</h1>
          <div class="yAxis-name">(发现处置率)</div>
          <div ref="envDeviceAnaysis" id="env-device-container"></div>
        </div>
      </div>
      <div class="orderly">
        <h1>有序</h1>
        <div class="road-setting">
          <h1 class="arrow-title">道路交通设施</h1>
          <div class="statistics">
            <label-value-show label="城市道路网密度" :value="3.1" unit="公里/平方公里"></label-value-show>
            <label-value-show label="城市慢行道密度" :value="1024" unit="公里/平方公里"></label-value-show>
            <label-value-show label="停车位" :value="76899" unit="个"></label-value-show>
          </div>
          <h1 class="arrow-title">有序管理</h1>
          <div class="yAxis-name">(发现处置率)</div>
          <div ref="orderlyMangementAnaysis" id="orderly-management-container"></div>
        </div>
      </div>
    </div>
    <div class="center-content">
      <div class="arrow-left"></div>
    </div>
    <div class="right-content">
      <div class="neat">
        <h1>整洁</h1>
        <div class="green-setting">
          <h1 class="arrow-title">公园绿地设施</h1>
          <div class="statistics">
            <label-value-show label="人均公园绿地面积" :value="10" unit="公里/平方公里"></label-value-show>
            <label-value-show label="建成区绿地率" value="57%"></label-value-show>
            <label-value-show label="绿地覆盖率" value="60%"></label-value-show>
          </div>
          <h1 class="arrow-title">整洁管理水平</h1>
          <div ref="neatMangementAnaysis" id="neat-management-container"></div>
        </div>
      </div>
      <div class="safe">
        <h1>安全</h1>
        <div class="statistics">
          <label-value-show label="城市空气质量优良率" value="95%"></label-value-show>
          <label-value-show label="城市年重大事故死亡率" value="57%"></label-value-show>
          <label-value-show label="人均避难场所面积" :value="10" unit="平方米/人"></label-value-show>
        </div>
        <div class="yAxis-name">(发现处置率)</div>
        <div ref="safeAnaysis" id="safe-container"></div>
      </div>
      <div class="satisfied">
        <h1>公众满意</h1>
        <div class="statistics">
          <label-value-show label="事件按期处置率" value="98%"></label-value-show>
          <label-value-show label="平均处置时间" value="3h"></label-value-show>
          <label-value-show label="回访满意度" value="87%"></label-value-show>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryAnaysis, yCategoryAnaysis } from '@/common/echarts/comprehensive-evaluation'
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
      categoryAnaysis({
        ref: this.$refs.envDeviceAnaysis,
        xName: ['市容管理', '清扫保洁', '垃圾渣土', '施工管理', '垃圾分类'],
        barColor: [{
          offset: 0, color: '#66d6ff'
        }, {
          offset: 1, color: '#009dff'
        }],
        data: [100, 86, 87, 95, 75]
      })
      categoryAnaysis({
        ref: this.$refs.orderlyMangementAnaysis,
        xName: ['市政公用', '摊点经营', '停车秩序', '违章搭建', '街容管理'],
        barColor: [{
          offset: 0, color: '#6bec98'
        }, {
          offset: 1, color: '#11c372'
        }],
        data: [100, 78, 90, 88, 95]
      })
      categoryAnaysis({
        ref: this.$refs.safeAnaysis,
        xName: ['水气', '环卫', '道桥', '电力', '突发事故'],
        barColor: [{
          offset: 0, color: '#66d6ff'
        }, {
          offset: 1, color: '#009dff'
        }],
        data: [100, 89, 93, 90, 88]
      })
      yCategoryAnaysis(this.$refs.neatMangementAnaysis)
    }
  }
}
</script>

<style lang="scss" scoped>
.supervision-management {
  display: flex;
  justify-content: space-between;
  padding: 0 25px 39px;
  margin-top: 107px;
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
      margin-top: 20px;
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
  .yAxis-name {
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    color: #ffffff;
    line-height: 18px;
    text-indent: 14px;
  }
  .left-content {
    .clean {
      width: 460px;
      height: 522px;
      padding: 29px;
      background: url('../../common/image/comprehensive-evaluation/bg-clean.png') no-repeat center;
      background-size: cover;
      overflow-y: auto;
      .env-setting {
        .statistics {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          & > div {
            width: 50%;
            padding: 0 32px 0 12px;
            margin-bottom: 12px;
            ::v-deep .name {
              text-align: left;
            }
          }
        }
        #env-device-container {
          width: 100%;
          height: 150px;
        }
      }
      &:hover {
        background: url('../../common/image/comprehensive-evaluation/bg-clean_active.png') no-repeat center;
        background-size: cover;
      }
    }
    .orderly {
      width: 460px;
      height: 410px;
      padding: 29px;
      background: url('../../common/image/comprehensive-evaluation/bg-orderly.png') no-repeat center;
      background-size: cover;
      overflow-y: auto;
      .statistics {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 12px;
        margin-top: 20px;
        & > div {
          width: 30%;
          margin-bottom: 12px;
          text-align: center;
          &:nth-of-type(2) {
            width: 40%;
          }
        }
      }
      #orderly-management-container {
        width: 100%;
        height: 140px;
      }
      &:hover {
        background: url('../../common/image/comprehensive-evaluation/bg-orderly_active.png') no-repeat center;
        background-size: cover;
      }
    }
  }
  .center-content {
    position: relative;
    flex: 1;
    .arrow-left {
      position: absolute;
      left: 20px;
      top: 10px;
      width: 34px;
      height: 34px;
      background: url('../../common/image/supervision-management/back.png') no-repeat center;
      background-size: cover;
      cursor: pointer;
    }
  }
  .right-content {
    .neat {
      width: 460px;
      height: 430px;
      padding: 29px;
      background: url('../../common/image/comprehensive-evaluation/bg-neat.png') no-repeat center;
      background-size: cover;
      overflow-y: auto;
      .statistics {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 12px;
        margin-top: 20px;
        & > div {
          width: calc(100% / 3);
          margin-bottom: 12px;
          text-align: center;
        }
      }
      #neat-management-container {
        width: 100%;
        height: 180px;
      }
      &:hover {
        background: url('../../common/image/comprehensive-evaluation/bg-neat_active.png') no-repeat center;
        background-size: cover;
      }
    }
    .safe {
      width: 460px;
      height: 340px;
      padding: 29px;
      background: url('../../common/image/comprehensive-evaluation/bg-safe.png') no-repeat center;
      background-size: cover;
      overflow-y: auto;
      .statistics {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 12px;
        margin-top: 20px;
        & > div {
          width: calc(100% / 3);
          margin-bottom: 12px;
          text-align: center;
        }
      }
      #safe-container {
        width: 100%;
        height: 160px;
      }
      &:hover {
        background: url('../../common/image/comprehensive-evaluation/bg-safe_active.png') no-repeat center;
        background-size: cover;
      }
    }
    .satisfied {
      width: 460px;
      height: 160px;
      padding: 29px;
      background: url('../../common/image/comprehensive-evaluation/bg-satisfied.png') no-repeat center;
      background-size: cover;
      overflow-y: auto;
      .statistics {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 12px;
        margin-top: 20px;
        & > div {
          width: calc(100% / 3);
          margin-bottom: 12px;
          text-align: center;
        }
      }
      &:hover {
        background: url('../../common/image/comprehensive-evaluation/bg-satisfied_active.png') no-repeat center;
        background-size: cover;
      }
    }
  }
}
</style>