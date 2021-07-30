<template>
  <div class="supervision-management">
    <div ref="map" id="map-container" v-show="(isCity && activeViewModel === 'event') || (!isCity && graphActive === 'internet')"></div>
    <div class="left-content">
      <div class="city-running">
        <h1>城市运行</h1>
        <div class="statistics">
          <label-value-show label="今日上报事件" :value="2274" format="thousand"></label-value-show>
          <label-value-show label="今日处置结案率" value="95%"></label-value-show>
          <label-value-show label="重大事件" :value="2" format="thousand"></label-value-show>
        </div>
      </div>
      <div class="event-running">
        <h1 class="arrow-title">各地市事件运行情况</h1>
        <div ref="eventRunning" class="event-running-container"></div>
      </div>
      <div class="base-device">
        <h1 class="arrow-title">基础设施配套</h1>
        <div class="top-info">
          <div class="type">
            <div class="value">7<span class="unit">类</span></div>
            <div class="label">部件类型</div>
          </div>
          <div class="number">
            <div class="value">64,578<span class="unit">个</span></div>
            <div class="label">部件数量</div>
          </div>
          <div class="compare">
            <div class="tb">
              <div class="name">同比</div>
              <div :class="false ? 'up' : 'down'">
                <span class="arrow"></span>
                <span class="percent">12%</span>
              </div>
            </div>
            <div class="hb">
              <div class="name">环比</div>
              <div :class="true ? 'up' : 'down'">
                <span class="arrow"></span>
                <span class="percent">32%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-info">
          <div class="statistics">
            <label-value-show v-for="item in baseDeviceData" :key="item.label" v-bind="item"></label-value-show>
          </div>
        </div>
      </div>
    </div>
    <div :class="['center-content', { 'is-city': isCity }]">
      <div ref="provinceHotMap" id="province-hot-map" v-show="!isCity && graphActive === 'general'"></div>
      <div ref="cityHotMap" id="city-hot-map" v-show="isCity && activeViewModel === 'grid'"></div>
      <div class="statistics">
        <icon-info-show class="item" v-for="item in generalData" :key="item.name" :item="item"></icon-info-show>
      </div>
      <div class="arrow-left" v-show="isCity" @click="onBack"></div>
      <div class="city-list" v-show="isCity">
        <div v-for="item in cityList" :key="item" :class="['city-item', { active: item === activeCity }]" @click="cityChange(item)">{{ item }}</div>
      </div>
      <div class="legend" v-show="isCity && activeViewModel === 'grid'">
        <div class="level-1">优秀</div>
        <div class="level-2">良好</div>
        <div class="level-3">合格</div>
        <div class="level-4">不合格</div>
      </div>
      <div class="center-tabs" v-show="!isCity">
        <div :class="['tab-item', { active: graphActive === 'general' }]" @click="graphChange('general')">综合概况</div>
        <div :class="['tab-item', { active: graphActive === 'internet' }]" @click="graphChange('internet')">联网运行</div>
      </div>
    </div>
    <div class="right-content" v-show="!isCity">
      <div class="supervision-check">
        <h1>监督检查</h1>
        <div class="track-supervision">
          <h1 class="arrow-title">跟踪监督</h1>
          <div class="statistics">
            <label-value-show v-for="item in trackSupervisionData" :key="item.label" v-bind="item"></label-value-show>
          </div>
        </div>
        <div class="rubbish-stacking">
          <h1 class="arrow-title">非正规垃圾堆放点整治</h1>
          <div ref="rubbishStacking" class="rubbish-stacking-container"></div>
        </div>
        <div class="street-face">
          <h1 class="arrow-title">街容示范街创建</h1>
          <div class="title-content">
            <icon-info-show :item="{ icon: 'iconShifanjie', name: '街容师范街数量', value: 91, unit: '个', noExpand: true }"></icon-info-show>
            <div class="compare">
              <div class="tb">
                <div class="name">同比</div>
                <div :class="false ? 'up' : 'down'">
                  <span class="arrow"></span>
                  <span class="percent">11</span>
                </div>
              </div>
              <div class="hb">
                <div class="name">环比</div>
                <div :class="true ? 'up' : 'down'">
                  <span class="arrow"></span>
                  <span class="percent">3.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <div v-for="item in list" :key="item.name" class="list-item">
              <div class="name">{{ item.name }}</div>
              <div class="city">杭州市</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-tabs" v-show="isCity">
      <div :class="['tab-item', { active: activeViewModel === 'event' }]" @click="viewModelChange('event')">事件视图</div>
      <div :class="['tab-item', { active: activeViewModel === 'grid' }]" @click="viewModelChange('grid')">网格视图</div>
    </div>
    <el-tree v-show="isCity && activeViewModel === 'event'" class="tree" :data="treeData" show-checkbox node-key="id" icon-class="empty" :default-expanded-keys="[1]" :default-checked-keys="[2, 3]" :props="defaultProps"> </el-tree>
  </div>
</template>

<script>
import { MapContainer } from '@/common/js/amap'
import { eventRunningAnaysis, rubbishStackingAnaysis, provinceMapCharts, cityMapCharts } from '@/common/echarts/supervision-management'
export default {
  data() {
    return {
      map: null,
      isCity: false,
      activeCity: '',
      activeViewModel: 'grid',
      graphActive: 'general',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        {
          id: 1,
          label: '事件',
          children: [
            {
              id: 3,
              label: '未处理'
            },
            {
              id: 4,
              label: '已处理'
            }
          ]
        },
        {
          id: 2,
          label: '视频监控',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            }
          ]
        }
      ],
      list: [
        {
          name: '近代史缩影——清河坊历史街区'
        },
        {
          name: '吃货集散地——中山北路'
        },
        {
          name: '商业聚集地——民心路'
        },
        {
          name: '文化活遗产——桥西直街、桥弄街'
        },
        {
          name: '城西景观带——丰潭路'
        }
      ],
      generalData: [
        {
          icon: 'iconLianshu',
          name: '本月立案数量',
          value: 2391,
          unit: '个',
          noExpand: true,
          format: 'thousand'
        },
        {
          icon: 'iconJieanlv',
          name: '本月按期结案率',
          value: 85.3,
          unit: '%',
          noExpand: true,
          format: 'thousand'
        },
        {
          icon: 'iconYuqishijian',
          name: '逾期事件',
          value: 235,
          noExpand: true,
          format: 'thousand'
        },
        {
          icon: 'iconZhongdashijian',
          name: '重大事件',
          value: 138,
          noExpand: true,
          format: 'thousand'
        }
      ],
      baseDeviceData: [
        {
          label: '市容环卫',
          value: 7654,
          unit: '个',
          format: 'thousand'
        },
        {
          label: '园林绿化',
          value: 10312,
          unit: '个',
          format: 'thousand'
        },
        {
          label: '燃气',
          value: 22312,
          unit: '个',
          format: 'thousand'
        },
        {
          label: '供水排水',
          value: 12941,
          unit: '个',
          format: 'thousand'
        },
        {
          label: '城市桥隧',
          value: 12589,
          unit: '个',
          format: 'thousand'
        }
      ],
      trackSupervisionData: [
        {
          label: '督办案件数',
          value: 29,
          format: 'thousand'
        },
        {
          label: '办结数',
          value: 17,
          format: 'thousand'
        },
        {
          label: '即将到期督办件数',
          value: 12,
          format: 'thousand'
        },
        {
          label: '被督办单位数',
          value: 8,
          format: 'thousand'
        },
        {
          label: '超期通报单位数',
          value: 3,
          format: 'thousand'
        },
        {
          label: '逾期未处理单位数',
          value: 2,
          format: 'thousand'
        }
      ],
      cityList: ['杭州市', '宁波市', '嘉兴市', '绍兴市', '温州市', '台州市', '湖州市', '衢州市', '金华市', '舟山市', '丽水市']
    }
  },
  mounted() {
    this.initMap()
    this.initCharts()
  },
  methods: {
    initMap() {
      this.map = new MapContainer({
        target: 'map-container',
        mapStyle: 'amap://styles/36fa8614fd5a353872b1c2d503e006c2',
        zoom: 12,
        popup: 'mark-dialog',
        closeInfoWindowCallback: () => {},
        clickHook: () => {}
      })
      this.map.addPoints('iconEvent', [
        {
          lon: 120.14507,
          lat: 30.264084
        },
        {
          lon: 120.26507,
          lat: 30.206084
        },
        {
          lon: 120.24507,
          lat: 30.375084
        }
      ])
      this.map.addPoints('iconMonitor', [
        {
          lon: 120.15507,
          lat: 30.284084
        }
      ])
    },
    initCharts() {
      eventRunningAnaysis(this.$refs.eventRunning)
      rubbishStackingAnaysis(this.$refs.rubbishStacking)
      provinceMapCharts(this.$refs.provinceHotMap, params => {
        this.isCity = true
        this.activeCity = params.name
        this.$nextTick(() => {
          cityMapCharts(this.$refs.cityHotMap, params.name)
        })
      })
    },
    cityChange(name) {
      this.activeCity = name
      this.$nextTick(() => {
        cityMapCharts(this.$refs.cityHotMap, name)
      })
    },
    viewModelChange(name) {
      this.activeViewModel = name
    },
    graphChange(name) {
      this.graphActive = name
    },
    onBack() {
      this.isCity = false
      this.activeViewModel = 'grid'
      this.graphActive = 'general'
    }
  }
}
</script>

<style lang="scss" scoped>
.supervision-management {
  position: relative;
  #map-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh + 207px);
  }
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
    .city-running {
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
    .event-running {
      .event-running-container {
        width: 100%;
        height: 450px;
      }
    }
    .base-device {
      .top-info {
        display: flex;
        align-items: center;
        margin-top: 23px;
        .type,
        .number {
          height: 42px;
          line-height: 21px;
          text-align: center;
          .value {
            font-size: 16px;
            font-family: Michroma, Michroma-Regular;
            font-weight: 400;
            color: #ffffff;
            .unit {
              font-size: 12px;
            }
          }
          .label {
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #fdad43;
          }
        }
        .type {
          width: 158px;
          border-right: 1px solid rgba(120, 173, 255, 0.18);
        }
        .number {
          width: 200px;
          padding-left: 50px;
        }
        .compare {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 200px;
          & > div {
            display: flex;
            justify-content: center;
            width: 100%;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            margin: 2px 8px 2px 0;
            .name {
              margin-right: 4px;
            }
            .up {
              color: #11c372;
              .arrow {
                display: inline-block;
                vertical-align: top;
                border: 5px solid transparent;
                border-bottom-color: #11c372;
                margin-right: 5px;
              }
              .percent {
                display: inline-block;
                vertical-align: top;
              }
            }
            .down {
              color: #ff4f5c;
              .arrow {
                display: inline-block;
                vertical-align: top;
                border: 5px solid transparent;
                border-top-color: #ff4f5c;
                margin-right: 5px;
                margin-top: 5px;
              }
              .percent {
                display: inline-block;
                vertical-align: top;
              }
            }
          }
        }
      }
      .bottom-info {
        .statistics {
          display: flex;
          flex-wrap: wrap;
          margin-top: 32px;
          & > div {
            width: calc(100% / 3);
            text-align: center;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .center-content {
    position: absolute;
    top: 107px;
    left: 490px;
    right: 490px;
    height: 934px;
    margin-bottom: 100px;
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
    .statistics {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      margin-left: 10px;
      .icon-info-show {
        width: 234px;
        padding-left: 65px;
        ::v-deep.value {
          color: #fdad43;
        }
      }
    }
    .city-list {
      position: absolute;
      left: 20px;
      top: 100px;
      width: 140px;
      background: rgba(0, 29, 57, 0.89);
      border: 1px solid;
      border-image: linear-gradient(180deg, rgba(58, 158, 255, 0) 0%, #3a9eff 50%, rgba(58, 158, 255, 0) 100%) 1 1;
      .city-item {
        height: 49px;
        line-height: 49px;
        text-align: center;
        font-size: 15px;
        font-weight: 400;
        cursor: pointer;
        &.active {
          background: url('../../common/image/supervision-management/city-select.png') no-repeat center;
          background-size: cover;
          color: #0dc6ff;
          font-weight: 500;
        }
        &:hover {
          background: url('../../common/image/supervision-management/city-select.png') no-repeat center;
          background-size: cover;
          color: #0dc6ff;
          font-weight: 500;
        }
      }
    }
    .center-tabs {
      position: absolute;
      left: 40px;
      bottom: 142px;
      display: flex;
    }
    #province-hot-map, #city-hot-map {
      width: 100%;
      height: 854px;
    }
    .legend {
      position: absolute;
      right: 40px;
      bottom: 100px;
      color: #ffffff;
      font-size: 14px;
      div {
        margin-bottom: 16px;
        &::before {
          display: inline-block;
          content: '';
          width: 18px;
          height: 12px;
          background: #11c372;
          margin-right: 7px;
        }
        &.level-2::before {
          background: #009DFF;
        }
        &.level-3::before {
          background: #FDAD43;
        }
        &.level-4::before {
          background: #FF4F5C;
        }
      }
    }
    &.is-city {
      right: 0;
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
    .supervision-check {
      .track-supervision {
        .statistics {
          display: flex;
          flex-wrap: wrap;
          margin-top: 32px;
          & > div {
            width: calc(100% / 3);
            text-align: center;
            margin-bottom: 20px;
          }
        }
      }
      .rubbish-stacking {
        .rubbish-stacking-container {
          width: 100%;
          height: 250px;
        }
      }
      .street-face {
        .title-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 20px 10px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          .compare {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 150px;
            & > div {
              display: flex;
              width: 100%;
              font-size: 12px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.8);
              margin: 2px 8px 2px 0;
              .name {
                margin-right: 8px;
              }
              .up {
                color: #11c372;
                .arrow {
                  display: inline-block;
                  vertical-align: top;
                  border: 5px solid transparent;
                  border-bottom-color: #11c372;
                  margin-right: 5px;
                }
                .percent {
                  display: inline-block;
                  vertical-align: top;
                }
              }
              .down {
                color: #ff4f5c;
                .arrow {
                  display: inline-block;
                  vertical-align: top;
                  border: 5px solid transparent;
                  border-top-color: #ff4f5c;
                  margin-right: 5px;
                  margin-top: 5px;
                }
                .percent {
                  display: inline-block;
                  vertical-align: top;
                }
              }
            }
          }
        }
        .list {
          padding: 0 20px;
          .list-item {
            display: flex;
            line-height: 36px;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #ffffff;
            .name {
              flex: 1;
            }
            .city {
              width: 80px;
              text-align: right;
            }
          }
        }
      }
    }
  }
  .right-tabs {
    position: absolute;
    right: 73px;
    top: 113px;
    display: flex;
  }
  .tab-item {
    width: 68px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    opacity: 1;
    background: rgba(0, 29, 57, 0.6);
    border: 1px solid #004384;
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    &.active {
      position: relative;
      background: radial-gradient(rgba(29, 190, 255, 0.6), rgba(29, 190, 255, 0));
      border: 1px solid;
      border-image: linear-gradient(180deg, rgba(58, 158, 255, 0.6) 1%, rgba(58, 158, 255, 0.1)) 1 1;
      box-shadow: 0px 0px 24px 0px rgba(0, 60, 205, 0.6) inset;
      color: #ffffff;
      font-weight: 500;
      &::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        content: '';
        margin-left: -4px;
        border: 4px solid transparent;
        border-bottom-color: #1dd4ff;
      }
    }
  }
  .tree {
    position: absolute;
    right: 20px;
    top: 784px;
    width: 150px;
    height: 200px;
    background: transparent;
  }
  ::v-deep .el-tree-node__content {
    background: transparent !important;
  }
  ::v-deep .el-checkbox__input .el-checkbox__inner {
    background: rgba(0, 29, 57, 0.6);
    border: 1px solid #004384;
  }
  ::v-deep .is-checked .el-checkbox__inner {
    background: #0dc6ff;
    border: 1px solid #0dc6ff;
  }
  ::v-deep.el-tree-node__label {
    color: #ffffff;
  }
}
</style>