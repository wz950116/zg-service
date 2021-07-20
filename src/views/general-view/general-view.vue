<template>
  <div class="general-view">
    <!-- 左侧内容 -->
    <div class="left-content">
      <!-- 综合运行概览 -->
      <div class="integrated-operation">
        <h1>综合运行概览</h1>
        <div class="list">
          <div v-for="item in integratedOperation" :key="item.name" class="list-item">
            <div class="left">
              <img :src="item.icon" alt="" />
            </div>
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div :class="['value', { 'warning': item.error }]">
                <span>{{ item.value }}</span>
                <span class="unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 城市管理指数 -->
      <div class="city-management">
        <h1>城市管理指数</h1>
        <div class="content">
          <div class="left">
            <div class="select">
              <span class="city">浙江</span>
              <span class="point">98</span>
              <span class="updown"></span>
            </div>
            <div class="chart">
              <img src="" alt="">
            </div>
          </div>
          <div class="right">
            <div class="list">
              <div v-for="(item, index) in cityManagement" :key="item.name" class="list-item">
                <span :class="['ranking', { 'first': index === 0, 'second': index === 1, 'third': index === 2 }]">{{ index + 1 }}</span>
                <span class="name">{{ item.name }}</span>
                <span class="value">{{ item.value }}</span>
                <span :class="item.status ? 'arrow-up' : 'arrow-down'"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 平台应用覆盖 -->
      <div class="platform-apply">
        <h1>平台应用覆盖</h1>
        <div class="content">
          <div class="statistics">
            <div class="jcqy-area">
              <div class="value">
                <span class="number">3626.6</span>
                <span class="unit">平方公里</span>
              </div>
              <div class="name">建成区域面积</div>
            </div>
            <div class="szcg-area">
              <div class="value">
                <span class="number">3626</span>
                <span class="unit">平方公里</span>
              </div>
              <div class="name">数字城管覆盖面积</div>
            </div>
            <div class="coverage">
              <div class="value">
                <span class="number">85.6</span>
                <span class="unit">%</span>
              </div>
              <div class="name">覆盖率</div>
            </div>
          </div>
          <div class="list">
            <div v-for="(item, index) in platformApply" :key="item.name" :class="['list-item', { 'first': index === 0, 'second': index === 1, 'third': index === 2 }]">
              <span class="symbol"></span>
              <span class="ranking">NO.{{ index + 1 }}</span>
              <span class="name">{{ item.name }}</span>
              <span class="value">{{ item.value }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间内容 -->
    <div class="center-content"></div>
    <!-- 右侧内容 -->
    <div class="right-content">
      <!-- 运行事件 -->
      <div class="running-event">
        <h1>运行事件</h1>
        <div class="content">
          <div class="statistics">
            <div class="create-count">
              <div class="value">
                <span class="number">3626</span>
                <span class="unit">件</span>
              </div>
              <div class="name">立案总量</div>
            </div>
            <div class="close-count">
              <div class="value">
                <span class="number">2689</span>
                <span class="unit">件</span>
              </div>
              <div class="name">办结总量</div>
            </div>
            <div class="emergency">
              <div class="value">
                <span class="number">35</span>
                <span class="unit">件</span>
              </div>
              <div class="name">突发事件</div>
            </div>
          </div>
          <div ref="pieRunningEvent" class="pie-container"></div>
        </div>
      </div>
      <!-- 城市服务 -->
      <div class="city-service">
        <h1>城市服务</h1>
        <div class="list">
          <div v-for="item in cityService" :key="item.name" class="list-item">
            <div class="left">
              <img :src="item.icon" alt="" />
            </div>
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div :class="['value', { 'warning': item.error }]">
                <span>{{ item.value }}</span>
                <span class="unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 运行报告 -->
      <div class="running-report">
        <h1>运行报告</h1>
        <div class="list">
          <div v-for="(item, index) in runningReportData" :key="index" class="list-item">
            <span class="name">2020年8月</span>
            <span class="value">浙江省数字城管平台运行分析报告</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <router-link to="/public-service">
        <img class="banner-1" src="../../common/image/general-view/banner-1.png" alt="">
      </router-link>
      <router-link to="/">
        <img class="banner-2" src="../../common/image/general-view/banner-2.png" alt="">
      </router-link>
      <router-link to="/business-guide">
        <img class="banner-3" src="../../common/image/general-view/banner-3.png" alt="">
      </router-link>
      <router-link to="/">
        <img class="banner-4" src="../../common/image/general-view/banner-4.png" alt="">
      </router-link>
      <router-link to="/">
        <img class="banner-5" src="../../common/image/general-view/banner-5.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import { pieRunEvent } from '@/common/echarts/general-view'
import integratedOperation1 from '@/common/image/general-view/integrated-operation-1.png'
import integratedOperation2 from '@/common/image/general-view/integrated-operation-2.png'
import integratedOperation3 from '@/common/image/general-view/integrated-operation-3.png'
import integratedOperation4 from '@/common/image/general-view/integrated-operation-4.png'
import integratedOperation5 from '@/common/image/general-view/integrated-operation-5.png'
import integratedOperation6 from '@/common/image/general-view/integrated-operation-6.png'
import integratedOperation7 from '@/common/image/general-view/integrated-operation-7.png'
import integratedOperation8 from '@/common/image/general-view/integrated-operation-8.png'
import integratedOperation9 from '@/common/image/general-view/integrated-operation-9.png'
import integratedOperation10 from '@/common/image/general-view/integrated-operation-10.png'
export default {
  data() {
    return {
      integratedOperation: [
        {
          name: '事件按时处置率',
          value: '96.5',
          unit: '%',
          icon: integratedOperation2,
          error: true
        },
        {
          name: '停车泊位占有率',
          value: '95.8',
          unit: '%',
          icon: integratedOperation7
        },
        {
          name: '生活垃圾',
          value: '34',
          unit: '万吨',
          icon: integratedOperation9
        },
        {
          name: '污水处理量',
          value: '34',
          unit: '亿m³',
          icon: integratedOperation5
        },
        {
          name: '供水量',
          value: '38',
          unit: '亿m³',
          icon: integratedOperation3
        },
        {
          name: '燃气供应量',
          value: '38',
          unit: '亿m³',
          icon: integratedOperation4
        }
      ],
      cityManagement: [{
        name: '杭州',
        value: 95,
        status: 0
      }, {
        name: '宁波',
        value: 92,
        status: 1
      }, {
        name: '嘉兴',
        value: 88,
        status: 0
      }, {
        name: '湖州',
        value: 85,
        status: 1
      }, {
        name: '绍兴',
        value: 83,
        status: 1
      }],
      platformApply: [{
        name: '杭州市',
        value: 98
      }, {
        name: '宁波市',
        value: 95
      }, {
        name: '嘉兴市',
        value: 92
      }, {
        name: '绍兴市',
        value: 88
      }, {
        name: '温州市',
        value: 86
      }, {
        name: '台州市',
        value: 82
      }],
      cityService: [{
        name: '停车管理',
        value: '1000',
        unit: '个',
        icon: integratedOperation1
      }, {
        name: '公厕',
        value: '2078',
        unit: '座 ',
        icon: integratedOperation8
      }, {
        name: '城市公园',
        value: '38',
        unit: '座',
        icon: integratedOperation10
      }, {
        name: '绿道',
        value: '38',
        unit: '座',
        icon: integratedOperation6
      }],
      runningReportData: new Array(6)
    }
  },
  inject: ['app'],
  mounted() {
    this.initEchart()
  },
  methods: {
    async initEchart() {
      this.$nextTick(() => {
        const data = [{
          name: '市容管理',
          value: 85,
          color: '#009DFF'
        }, {
          name: '清扫保洁',
          value: 70,
          color: '#5B76FF'
        }, {
          name: '建筑垃圾',
          value: 55,
          color: '#00CAB5'
        }, {
          name: '生活垃圾',
          value: 40,
          color: '#FF4F5C'
        }, {
          name: '其他',
          value: 25,
          color: '#FDAD43'
        }]
        const series = []
        data.forEach((item, index) => {
          series.push({
            name: item.name,
            type: 'pie',
            radius: [72 - 10 * index + '%', 80 - 10 * index + '%'],
            // 环的位置
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            center: ['35%', '50%'],
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: item.value, // 需要显示的数据
                name: item.name,
                itemStyle: {
                  normal: {
                    color: item.color
                  }
                }
              },
              {
                value: 100 - item.value, // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          })
        })
        pieRunEvent(this.$refs.pieRunningEvent, series)
      })
    }
  }
}
</script>

<style>
body {
  background: #000037 url('../../common/image/public/bg.png') no-repeat center;
  background-size: cover;
}
</style>
<style lang="scss" scoped>
.general-view {
  display: flex;
  justify-content: space-between;
  padding: 0 25px 39px;
  margin-top: 107px;

  .left-content {
    width: 460px;
    height: 934px;
    padding: 29px;
    background: url('../../common/image/public/bg-border_1.png') no-repeat center;
    background-size: cover;

    h1 {
      margin-bottom: 20px;
      background: linear-gradient(180deg, #d8f4fc 20%, #25a4ff 89%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 24px;
      font-family: Fontquan, Fontquan-Regular;
      font-weight: 400;
      color: #44caff;
      line-height: 36px;
      letter-spacing: 3px;
      text-shadow: 0px 0px 20px rgba(0, 152, 255, 0.8);
    }

    .integrated-operation {
      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 8px;
        .list-item {
          display: flex;
          justify-content: space-between;
          width: 50%;
          margin-bottom: 18px;
          .left {
            width: 44px;
            height: 44px;
            margin-right: 22px;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            position: relative;
            flex: 1;
            line-height: 23px;
            .name {
              font-size: 14px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #3a9eff;
            }
            .value {
              font-size: 16px;
              font-family: Michroma, Michroma-Regular;
              font-weight: 400;
              text-align: left;
              color: #ffffff;
              &.warning {
                color: #ff4f5c;
              }
              .unit {
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Regular;
                margin-left: 5px;
              }
            }
            &::before {
              position: absolute;
              left: -10px;
              top: 8px;
              content: '';
              border: 4px solid transparent;
              border-left-color: #0dc6ff;
            }
          }
        }
      }
    }

    .city-management {
      .content {
        display: flex;
        justify-content: center;
        .left {
          width: 50%;
          .select {
            position: relative;
            width: 147px;
            height: 36px;
            line-height: 36px;
            background: url('../../common/image/general-view/select-bg.png') no-repeat center;
            background-size: cover;
            text-indent: 12px;
            margin-left: 23px;
            .city {
              font-size: 16px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.7);
              margin-right: 41px;
            }
            .point {
              font-size: 16px;
              font-family: Michroma, Michroma-Regular;
              font-weight: 400;
              color: #ffffff;
            }
            .updown {
              position: absolute;
              top: 7px;
              right: 8px;
              border: 8px solid transparent;
              border-bottom-color: #11C372;
            }
          }
        }
        .right {
          width: 50%;
          .list {
            .list-item {
              position: relative;
              margin-bottom: 17px;
              .ranking {
                display: inline-block;
                width: 28px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                background: rgba(255, 255, 255, 0.16);
                border-radius: 50%;
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                color: #ffffff;
                margin-right: 10px;
              }
              .first {
                color: #D84430;
                background: url('../../common/image/general-view/city-management-1.png') no-repeat center;
                background-size: cover;
              }
              .second {
                color: #DD6524;
                background: url('../../common/image/general-view/city-management-2.png') no-repeat center;
                background-size: cover;
              }
              .third {
                color: #E2AA20;
                background: url('../../common/image/general-view/city-management-3.png') no-repeat center;
                background-size: cover;
              }
              .name {
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.70);
                margin-right: 54px;
              }
              .value {
                font-size: 16px;
                font-family: Michroma, Michroma-Regular;
                font-weight: 400;
                color: #ffffff;
              }
              .arrow-up {
                position: absolute;
                top: 0;
                right: 8px;
                border: 8px solid transparent;
                border-bottom-color: #11C372;
              }
              .arrow-down {
                position: absolute;
                top: 10px;
                right: 8px;
                border: 8px solid transparent;
                border-top-color: #FF4F5C;
              }
            }
          }
        }
      }
    }

    .platform-apply {
      .content {
        .statistics {
          display: flex;
          justify-content: space-between;
          &>div {
            text-align: center;
            .value {
              margin-bottom: 7px;
              .number {
                font-size: 16px;
                font-family: Michroma, Michroma-Regular;
                font-weight: 400;
                text-align: right;
                color: #ffffff;
                margin-right: 4px;
              }
              .unit {
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
              }
            }
            .name {
              font-size: 14px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              text-align: center;
              color: #3a9eff;
            }
          }
          .jcqy-area {
            width: 40%;
          }
          .sjcg-area {
            width: 40%;
          }
          .coverage {
            width: 20%;
          }
        }
        .list {
          margin-top: 10px;
          .list-item {
            color: #ffffff;
            border-bottom: 1px solid rgba(120, 173, 255, 0.18);
            line-height: 36px;
            .symbol {
              display: inline-block;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: rgba(170, 176, 187, 0.60);
              vertical-align: top;
              margin-right: 12px;
              margin-top: 14px;
            }
            .ranking {
              display: inline-block;
              text-align: center;
              font-size: 16px;
              font-family: PingFangSC, PingFangSC-Medium;
              font-weight: 500;
              margin-right: 35px;
            }
            .name {
              font-size: 14px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.80);
              margin-right: 203px;
            }
            .value {
              font-size: 16px;
              font-family: Michroma, Michroma-Regular;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.80);
            }
            &:last-of-type {
              border-bottom: none;
            }
          }
          .first {
            color: #D84430;
            .symbol {
              background: #D84430;
            }
          }
          .second {
            color: #DD6524;
            .symbol {
              background: #DD6524;
            }
          }
          .third {
            color: #E2AA20;
            .symbol {
              background: #E2AA20;
            }
          }
        }
      }
    }
  }

  .center-content {
    position: relative;
    flex: 1;
  }

  .right-content {
    width: 460px;
    height: 934px;
    padding: 29px;
    background: url('../../common/image/public/bg-border_1.png') no-repeat center;
    background-size: cover;

    h1 {
      margin-bottom: 20px;
      background: linear-gradient(180deg, #d8f4fc 20%, #25a4ff 89%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 24px;
      font-family: Fontquan, Fontquan-Regular;
      font-weight: 400;
      color: #44caff;
      line-height: 36px;
      letter-spacing: 3px;
      text-shadow: 0px 0px 20px rgba(0, 152, 255, 0.8);
    }

    .running-event {
      .content {
        .statistics {
          display: flex;
          justify-content: space-between;
          &>div {
            width: calc(100% / 3);
            text-align: center;
            .value {
              margin-bottom: 7px;
              .number {
                font-size: 16px;
                font-family: Michroma, Michroma-Regular;
                font-weight: 400;
                text-align: right;
                color: #ffffff;
                margin-right: 4px;
              }
              .unit {
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
              }
            }
            .name {
              font-size: 14px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              text-align: center;
              color: #3a9eff;
            }
          }
        }
        .pie-container {
          width: 100%;
          height: 250px;
        }
      }
    }

    .city-service {
      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 8px;
        .list-item {
          display: flex;
          justify-content: space-between;
          width: 50%;
          margin-bottom: 18px;
          .left {
            width: 44px;
            height: 44px;
            margin-right: 22px;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            position: relative;
            flex: 1;
            line-height: 23px;
            .name {
              font-size: 14px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #3a9eff;
            }
            .value {
              font-size: 16px;
              font-family: Michroma, Michroma-Regular;
              font-weight: 400;
              text-align: left;
              color: #ffffff;
              &.warning {
                color: #ff4f5c;
              }
              .unit {
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Regular;
                margin-left: 5px;
              }
            }
            &::before {
              position: absolute;
              left: -10px;
              top: 8px;
              content: '';
              border: 4px solid transparent;
              border-left-color: #0dc6ff;
            }
          }
        }
      }
    }

    .running-report {
      .list {
        margin: 10px 12px 0 ;
        .list-item {
          color: #ffffff;
          border-bottom: 1px solid rgba(120, 173, 255, 0.18);
          line-height: 44px;
          span {
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.80);
          }
          .name {
            margin-right: 21px;
          }
        }
      }
    }
  }

  .nav {
    img {
      position: fixed;
      cursor: pointer;
    }
    .banner-1 {
      left: 1201px;
      top: 506px;
      width: 224px;
      height: 224px;
    }
    .banner-2 {
      left: 837px;
      top: 589px;
      width: 282px;
      height: 282px;
    }
    .banner-3 {
      left: 605px;
      top: 324px;
      width: 170px;
      height: 170px;
    }
    .banner-4 {
      left: 516px;
      top: 506px;
      width: 224px;
      height: 224px;
    }
    .banner-5 {
      left: 1188px;
      top: 324px;
      width: 170px;
      height: 170px;
    }
  }
}
</style>
