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
      <div class="combine-law-higher">
        <h1 class="arrow-title">联合执法高频事件</h1>
        <div class="list">
          <div v-for="(item, index) in highEventList" :key="item.name" class="list-item">
            <span class="ranking">{{ index + 1 }}</span>
            <span class="name">{{ item.name }}</span>
            <div class="right">
              <span class="value">{{ item.value }}</span>
              <span class="unit">件</span>
            </div>
          </div>
        </div>
        <div ref="combineLawHigher" id="combine-law-higher"></div>
      </div>
    </div>
    <div class="right-content">
      <h1>执法协同</h1>
      <div class="law-assist">
        <h1 class="arrow-title">跟踪监督</h1>
        <div class="statistics">
          <label-value-show label="本月执法协助" :value="29"></label-value-show>
          <label-value-show label="本月案件移交" :value="17"></label-value-show>
          <label-value-show label="本月两法衔接" :value="12"></label-value-show>
        </div>
      </div>
      <div class="law-assist-sort">
        <h1 class="arrow-title">执法协同分类统计</h1>
        <div ref="lawAssistSort" id="law-assist-sort"></div>
      </div>
      <div class="law-assist-task">
        <h1 class="arrow-title">执法协同重点任务</h1>
        <div class="progress-wrap">
          <div class="progress" v-for="item in lawAssistTaskList" :key="item.name">
            <div class="info">
              <span>{{ item.name }}</span>
              <span class="value">{{ item.value }}%</span>
            </div>
            <div class="bar"></div>
            <div class="bar-active" :style="{ width: item.value + '%' }"></div>
          </div>
        </div>
      </div>
      <div class="law-assist-build">
        <h1 class="arrow-title">执法协同机制建设</h1>
        <div class="list">
          <div v-for="item in lawAssistBuildList" :key="item.name" class="list-item">
            <span>{{ item.name }}</span>
            <span :class="item.status ? 'success' : 'warning'">{{ item.status ? '已统一' : '未统一' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { combineLawTrend, pieCommonCharts } from '@/common/echarts/integrated-law'
export default {
  data() {
    return {
      highEventList: [{
        name: '非法收运营处置建筑垃圾',
        value: 221
      }, {
        name: '露天秸秆焚烧',
        value: 132
      }, {
        name: '无序设摊',
        value: 98
      }, {
        name: '非法户外广告',
        value: 12
      }],
      lawAssistTaskList: [{
        name: '执法协同机制建立',
        value: 90
      }, {
        name: '联合执法专项行动',
        value: 82
      }, {
        name: '建立日常沟通平台',
        value: 80
      }, {
        name: '提升执法协作水平',
        value: 80
      }],
      lawAssistBuildList: [{
        name: '城市管理行政执法文书标准',
        status: 0
      }, {
        name: '行政裁量基准',
        status: 0
      }, {
        name: '行政执法监督检查手册',
        status: 0
      }, {
        name: '行政执法协作机制',
        status: 1
      }, {
        name: '行政执法系统平台',
        status: 1
      }]
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      combineLawTrend(this.$refs.combineLawTrend)
      pieCommonCharts(this.$refs.combineLawHigher, {
        legendData: ['乱张贴、绘画', '非法户外广告', '无序设摊', '其他4', '其他5'],
        seriesData: [
          {
            value: 36,
            name: '乱张贴、绘画',
            itemStyle: {
              color: '#5B76FF'
            }
          },
          {
            value: 22,
            name: '非法户外广告',
            itemStyle: {
              color: '#009dff'
            }
          },
          {
            value: 18,
            name: '无序设摊',
            itemStyle: {
              color: '#00cab5'
            }
          },
          {
            value: 14,
            name: '其他4',
            itemStyle: {
              color: '#FDAD43'
            }
          },
          {
            value: 10,
            name: '其他5',
            itemStyle: {
              color: '#FF7951'
            }
          }
        ]
      })
      pieCommonCharts(this.$refs.lawAssistSort, {
        legendData: ['执法协助', '案件移交', '两法衔接'],
        seriesData: [
          {
            value: 36,
            name: '执法协助',
            itemStyle: {
              color: '#5b76ff'
            }
          },
          {
            value: 22,
            name: '案件移交',
            itemStyle: {
              color: '#009dff'
            }
          },
          {
            value: 14,
            name: '两法衔接',
            itemStyle: {
              color: '#00cab5'
            }
          }
        ]
      })
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
    .combine-law-higher {
      .list {
        margin: 15px 0;
        .list-item {
          margin-bottom: 16px;
          line-height: 24px;
          .ranking {
            display: inline-block;
            width: 24px;
            height: 24px;
            text-align: center;
            background: rgba(216, 68, 48, 0.15);
            border-radius: 50%;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #ffffff;
            margin-right: 14px;
          }
          .name {
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            color: rgba(255, 255, 255, 0.80);
            margin-right: 54px;
          }
          .right {
            float: right;
            .value {
              font-size: 16px;
              font-family: Michroma, Michroma-Regular;
              color: #FDAD43;
            }
            .unit {
              font-size: 12px;
              color: #ffffff;
              margin-left: 2px;
            }
          }

          &:nth-of-type(1) .ranking {
            color: #D84430;
            background: url('../../common/image/integrated-law/circle-1.png') no-repeat center;
            background-size: cover;
          }
          &:nth-of-type(2) .ranking {
            color: #E2AA20;
            background: url('../../common/image/integrated-law/circle-2.png') no-repeat center;
            background-size: cover;
          }
          &:nth-of-type(3) .ranking {
            color: #1BB579;
            background: url('../../common/image/integrated-law/circle-3.png') no-repeat center;
            background-size: cover;
          }
          &:nth-of-type(4) .ranking {
            color: #237DC6;
            background: url('../../common/image/integrated-law/circle-4.png') no-repeat center;
            background-size: cover;
          }
        }
      }
      #combine-law-higher {
        width: 100%;
        height: 300px;
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
    .law-assist {
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
    .law-assist-sort {
      #law-assist-sort {
        width: 100%;
        height: 250px;
      }
    }
    .law-assist-task {
      .progress-wrap {
        margin-top: 20px;
        padding: 0 12px;
      }
      .progress {
        position: relative;
        margin-bottom: 14px;
        .info {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.80);
          margin-bottom: 3px;
          .value {
            font-family: Michroma, Michroma-Regular;
          }
        }
        .bar {
          height: 8px;
          opacity: 0.1;
          background: #ffffff;
          border-radius: 5px;
        }
        .bar-active {
          position: absolute;
          left: 0;
          top: 17px;
          height: 9px;
          background: linear-gradient(90deg, #007eff,  #60d8ff);
          border-radius: 5px;
        }
      }
    }
    .law-assist-build {
      .list {
        padding: 0 12px;
        .list-item {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.80);
          line-height: 36px;
          .success {
            color: #11c372;
          }
          .warning {
            color: #0dc6ff;
          }
        }
      }
    }
  }
}
</style>