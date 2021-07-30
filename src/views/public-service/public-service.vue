<template>
  <div class="public-service">
    <div ref="map" id="map-container"></div>
    <!-- 服务类型切换 -->
    <div class="right-tabs">
      <div :class="{ 'active': activeName === '公共停车' }" @click="tabClick('公共停车')">公共停车</div>
      <div :class="{ 'active': activeName === '公共厕所' }" @click="tabClick('公共厕所')">公共厕所</div>
      <div :class="{ 'active': activeName === '公园绿道' }" @click="tabClick('公园绿道')">公园绿道</div>
    </div>
    <div class="content">
      <!-- 公共停车专题 -->
      <div v-show="activeName === '公共停车'" class="public-theme public-stop">
        <div class="title-content">
          <h1>公共停车专题</h1>
          <div class="city-select">
            <span>全省</span>
            <span :class="['arrow-down', { 'arrow-up': false }]"></span>
          </div>
          <div class="search">
            <img src="../../common/image/public-service/icon-search.png" width="44" height="44" alt="" />
          </div>
        </div>
        <el-row>
          <el-col :span="12" class="left-content">
            <div class="public-number stop-number">
              <div class="label">停车泊位数量</div>
              <div class="value">
                <span class="number">642340</span>
                <span class="unit">个</span>
              </div>
              <div class="percents">
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
          </el-col>
          <el-col :span="12" class="right-content">
            <el-progress type="dashboard" :percentage="78" color="#00CAB5"></el-progress>
            <div class="info">
              <span>0</span>
              <span>泊位空/闲情况</span>
              <span>100</span>
            </div>
          </el-col>
        </el-row>
        <!-- 停车场分类统计 -->
        <div class="stop-sort">
          <h1 class="arrow-title">停车场分类统计</h1>
          <div ref="stopSortAnaysis" id="stop-sort-container"></div>
        </div>
        <!-- 停车热点区域 -->
        <el-row class="stop-hot">
          <el-col :span="12">
            <h1 class="arrow-title">停车热点区域</h1>
          </el-col>
          <el-col :span="12">
            <div class="tabs">
              <div class="tab-item tab-item-active">近一周</div>
              <div class="tab-item">近一月</div>
              <div class="tab-item">近半年</div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="area-list">
              <div class="area-list-th">
                <div>区域名称</div>
                <div>区域人口(千人)</div>
                <div>泊位数量</div>
                <div>泊位指数</div>
              </div>
              <div v-for="item in stopHotList" :key="item.name" class="area-list-tr">
                <div class="active">{{ item.name }}</div>
                <div>{{ item.peoples }}</div>
                <div>{{ item.number }}</div>
                <div>{{ item.points }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 公共厕所专题 -->
      <div v-show="activeName === '公共厕所'" class="public-theme public-toilet">
        <div class="title-content">
          <h1>公共厕所专题</h1>
          <div class="city-select">
            <span>全省</span>
            <span :class="['arrow-down', { 'arrow-up': false }]"></span>
          </div>
          <div class="search">
            <img src="../../common/image/public-service/icon-search.png" width="44" height="44" alt="" />
          </div>
        </div>
        <el-row>
          <el-col :span="12" class="left-content">
            <div class="public-number toilet-number">
              <div class="label">公共厕所数量</div>
              <div class="value">
                <span class="number">853231</span>
                <span class="unit">座</span>
              </div>
              <div class="percents">
                <div class="compare">
                  <div class="name">本年</div>
                  <div :class="true ? 'up' : 'down'">
                    <span class="arrow"></span>
                    <span class="value">500</span>
                    <span class="unit">座</span>
                  </div>
                </div>
                <div class="compare">
                  <div class="name">环比</div>
                  <div :class="true ? 'up' : 'down'">
                    <span class="arrow"></span>
                    <span class="value">3.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="right-content">
            <div class="public-number toilet-setting">
              <div class="label">公共厕所设置密度</div>
              <div class="value">
                <span class="number">2.5</span>
                <span class="unit">座/平方公里</span>
              </div>
              <div class="percents">
                <div class="average">
                  <div class="name">平均值以上区县</div>
                  <div>
                    <span class="number">34</span>
                    <span class="unit">个</span>
                  </div>
                </div>
                <div class="average">
                  <div class="name">平均值以下区县</div>
                  <div>
                    <span class="number">36</span>
                    <span class="unit">个</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 各城市公厕设施数据统计 -->
        <div class="toilet-device">
          <h1 class="arrow-title">各城市公厕设施数据统计</h1>
          <div ref="toiletDeviceAnaysis" id="toilet-device-container"></div>
        </div>
        <!-- 公共厕所“五化”建设 -->
        <div class="toilet-build">
          <h1 class="arrow-title">公共厕所“五化”建设</h1>
          <div class="statistics">
            <div class="left-content">
              <icon-info-show :item="{ icon: 'iconWuhua', name: '“五化”公共厕所数量', value: 1021, unit: '个', noExpand: true }"></icon-info-show>
            </div>
            <div class="right-content">
              <div class="hb">
                <div class="label">本年</div>
                <div :class="true ? 'arrow-up' : 'arrow-down'">
                  91<span class="unit">个</span>
                </div>
              </div>
              <div class="tb">
                <div class="label">同比</div>
                <div :class="true ? 'arrow-up' : 'arrow-down'">3.5%</div>
              </div>
            </div>
          </div>
          <div ref="toiletBuildAnaysis" id="toilet-build-container"></div>
        </div>
      </div>
      <!-- 停车场搜索 -->
      <div class="search-detail">
        <div class="dialog-title">
          {{ activeName === '公共停车' ? '停车场搜索' : '公共厕所搜索' }}
          <img src="../../common/image/public-service/icon-close.png" width="14" height="14" alt="" />
        </div>
        <el-form class="form-list" :model="formData" inline label-position="right" label-width="82px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="区域名称" prop="areaName">
                <el-select v-model="formData.areaName" placeholder=""></el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="区域类型" prop="areaType">
                <el-select v-model="formData.areaType" placeholder=""></el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="停车场名称" prop="stopName">
                <el-input v-model="formData.stopName" placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="位置" prop="position">
                <el-input v-model="formData.position" placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="搜索范围" prop="range">
                <el-select v-model="formData.range" placeholder=""></el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="6" class="btn-list">
              <div class="search-btn">搜索</div>
            </el-col>
          </el-row>
        </el-form>
        <div class="search-result">
          <div class="list">
            <div v-for="(item, index) in searchList" :key="index" class="list-item">
              <div class="left-content">
                <img src="../../common/image/public-service/example-img.png" width="90" height="90" alt="">
              </div>
              <div class="right-content">
                <div class="code">停车场{{ item.code }}</div>
                <div class="address">{{ item.address }}</div>
                <div class="info">
                  <span class="type">{{ item.type }}</span>
                  <span>{{ item.current }}/{{ item.total }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-pagination
          :page-size="4"
          layout="prev, pager, next"
          :total="136">
        </el-pagination>
      </div>
    </div>
    <!-- 公共停车专题-标记弹窗 -->
    <div class="remark-dialog" v-if="false">
      <img class="bg-top" src="../../common/image/public-service/remark-dialog-top.png" alt="">
      <img class="bg-bottom" src="../../common/image/public-service/remark-dialog-bottom.png" alt="">
      <div class="dialog-content">
        <div class="title">
          <h1 class="name">浙江省人民医院</h1>
          <div class="address">科技馆街1600号</div>
          <img src="../../common/image/public-service/icon-close.png" width="14" height="14" alt="" />
        </div>
        <div class="info">
          <div class="level">
            周边停车需求：<span>高</span>
          </div>
          <div class="point">
            停车泊位指数：1.3
          </div>
          <div class="situation">
            泊位情况（空闲、规划泊位数）：0/200
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapContainer } from '@/common/js/amap'
import { stopSortAnaysis, toiletDeviceAnaysis, toiletBuildAnaysis } from '@/common/echarts/public-service'
export default {
  data() {
    return {
      activeName: '公共停车',
      map: null,
      showMapDialog: false,
      formData: {
        areaName: '',
        areaType: '',
        stopName: '',
        position: '',
        range: ''
      },
      stopHotList: [
        {
          name: '武林商圈',
          peoples: 10,
          number: 805,
          points: 1.5
        },
        {
          name: '浙一医院周边',
          peoples: 8,
          number: 1020,
          points: 3
        },
        {
          name: '西湖景区周边',
          peoples: 9.5,
          number: 298,
          points: 4
        },
        {
          name: '杭州东站区域',
          peoples: 14.5,
          number: 768,
          points: 2.5
        },
        {
          name: '凤起路区域',
          peoples: 18.4,
          number: 119,
          points: 6
        },
        {
          name: '浙二医院周边',
          peoples: 21.5,
          number: 152,
          points: 3.4
        },
        {
          name: '浙江儿童医院周边',
          peoples: 32,
          number: 1098,
          points: 4.5
        }
      ],
      searchList: new Array(4).fill({
        code: '000033',
        address: '兴政南巷与市场路交叉口东北50米',
        type: '路边停车场',
        current: 0,
        total: 100
      })
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
        clickHook: () => {},
        graphicSelect: (data, fn) => {
          fn(this)
          this.showMapDialog = true
        }
      })
      this.map.addPoints('iconP', [{
        lon: 120.14507,
        lat: 30.264084
      }, {
        lon: 120.26507,
        lat: 30.206084
      }, {
        lon: 120.24507,
        lat: 30.375084
      }])
      this.map.addPoints('iconPosition', [{
        lon: 120.15507,
        lat: 30.284084
      }])
      this.map.addCircle([120.15507, 30.274084])
      this.map.addCircle([120.26507, 30.206084], {
        strokeColor: '#11c372',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: 'rgba(17, 195, 114, 0.20)'
      })
      this.map.addCircle([120.24507, 30.375084], {
        strokeColor: '#fdad43',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: 'rgba(253, 173, 67, 0.20)'
      })
    },
    initCharts() {
      stopSortAnaysis(this.$refs.stopSortAnaysis)
    },
    tabClick(name) {
      if (this.activeName === name) return
      this.activeName = name
      this.$nextTick(() => {
        if (this.activeName === '公共停车') {
          stopSortAnaysis(this.$refs.stopSortAnaysis)
        } else if (this.activeName === '公共厕所') {
          toiletDeviceAnaysis(this.$refs.toiletDeviceAnaysis)
          toiletBuildAnaysis(this.$refs.toiletBuildAnaysis)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/mixin.scss';
.public-service {
  position: relative;
  #map-container {
    width: 100%;
    height: calc(100vh + 207px);
  }
  .right-tabs {
    position: absolute;
    right: 0;
    top: 113px;
    width: 160px;
    div {
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.80);
      text-indent: 20px;
      cursor: pointer;
      &.active {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Semibold;
        letter-spacing: 1px;
        color: #ffffff;
        background: url('../../common/image/public-service/hover-bg.png');
        background-size: cover;
      }
      &:hover {
        letter-spacing: 1px;
        color: #ffffff;
        background: url('../../common/image/public-service/hover-bg.png');
        background-size: cover;
      }
    }
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
  .public-theme {
    position: absolute;
    left: 30px;
    top: 0;
    width: 460px;
    height: 934px;
    margin-top: 107px;
    margin-bottom: 100px;
    padding: 15px 29px;
    background: url('../../common/image/public/bg-border_1.png') no-repeat center;
    background-size: cover;
    overflow-y: auto;
    .title-content {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      h1 {
        width: 274px;
      }
      .city-select {
        width: 68px;
        height: 32px;
        line-height: 32px;
        background: radial-gradient(rgba(29, 190, 255, 0.6), rgba(29, 190, 255, 0));
        border: 1px solid;
        border-image: linear-gradient(180deg, rgba(58, 158, 255, 0.6) 1%, rgba(58, 158, 255, 0.1)) 1 1;
        box-shadow: 0px 0px 24px rgba(0, 60, 205, 0.6) inset;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        margin-right: 16px;
        cursor: pointer;
        text-align: center;
        .arrow-down {
          display: inline-block;
          border: 4px solid transparent;
          border-top-color: #ffffff;
          vertical-align: top;
          margin-top: 15px;
          margin-left: 6px;
        }
        .arrow-up {
          border: 4px solid transparent;
          border-bottom-color: #ffffff;
          margin-top: 10px;
        }
      }
      .search {
        cursor: pointer;
      }
    }
    .el-col-12 {
      .public-number {
        & > .label {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #3a9eff;
          margin-bottom: 12px;
          &::before {
            display: inline-block;
            vertical-align: top;
            content: '';
            border: 4px solid transparent;
            border-left-color: #0dc6ff;
            margin-right: 6px;
            margin-top: 3px;
          }
        }
        & > .value {
          color: #ffffff;
          margin-left: 14px;
          margin-bottom: 15px;
          .number {
            font-size: 20px;
            font-family: Michroma, Michroma-Regular;
            font-weight: 400;
            margin-right: 4px;
          }
          .unit {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
          }
        }
      }
    }
  }
  .public-stop {
    .left-content {
      .stop-number {
        .percents {
          display: flex;
          width: 100%;
          margin-left: 12px;
          & > div {
            display: flex;
            justify-content: center;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            margin-right: 8px;
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
    }
    .right-content {
      position: relative;
      padding: 0 20px;
      text-align: center;
      .info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .stop-sort {
      margin-top: 25px;
      #stop-sort-container {
        width: 100%;
        height: 250px;
      }
    }
    .stop-hot {
      margin-top: 37px;
      h1 {
        font-size: 18px;
        margin-top: 8px;
      }
      .tabs {
        display: flex;
        width: 100%;
        cursor: pointer;
        .tab-item {
          width: 68px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background: rgba(0, 29, 57, 0.6);
          border: 1px solid #004384;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          color: rgba(255, 255, 255, 0.65);
        }
        .tab-item-active {
          background: radial-gradient(rgba(29, 190, 255, 0.6), rgba(29, 190, 255, 0));
          border: 1px solid;
          border-image: linear-gradient(180deg, rgba(58, 158, 255, 0.6) 1%, rgba(58, 158, 255, 0.1)) 1 1;
          box-shadow: 0px 0px 24px 0px rgba(0, 60, 205, 0.6) inset;
        }
      }
      .area-list {
        width: 100%;
        margin-top: 10px;
        .area-list-th {
          display: flex;
          justify-content: space-around;
          div {
            width: 23%;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: center;
            color: rgba(255, 255, 255, 0.45);
            line-height: 34px;
            &:nth-of-type(1) {
              width: 26%;
            }
            &:nth-of-type(2) {
              width: 28%;
            }
            @include textEllipsis();
          }
        }
        .area-list-tr {
          display: flex;
          justify-content: space-around;
          div {
            width: 23%;
            font-size: 12px;
            font-family: Michroma, Michroma-Regular;
            font-weight: 400;
            text-align: center;
            color: #ffffff;
            line-height: 34px;
            &:nth-of-type(2) {
              width: 26%;
            }
            @include textEllipsis();
          }
          .active {
            width: 28%;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #0dc6ff;
            &::before {
              display: inline-block;
              vertical-align: top;
              content: '';
              width: 7px;
              height: 7px;
              background: rgba(170, 176, 187, 0.6);
              border-radius: 50%;
              margin: 13px 12px 0 0;
            }
          }
        }
      }
    }
  }
  .public-toilet {
    .percents {
      &>div {
        display: flex;
        justify-content: space-between;
        padding-left: 14px;
        line-height: 28px;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.80);
        .up {
          color: #11c372;
          .arrow {
            display: inline-block;
            vertical-align: top;
            border: 5px solid transparent;
            border-bottom-color: #11c372;
            margin-right: 4px;
            margin-top: 6px;
          }
          .unit {
            color: rgba(255, 255, 255, 0.80);
            margin-left: 2px;
          }
        }
        .down {
          color: #ff4f5c;
          .arrow {
            display: inline-block;
            vertical-align: top;
            border: 5px solid transparent;
            border-bottom-color: #ff4f5c;
            margin-right: 4px;
            margin-top: 6px;
          }
        }
      }
      .compare {
        width: 60%;
      }
      .average {
        width: 90%;
        .number {
          color: #11C372;
          margin-right: 2px;
        }
      }
    }
    .toilet-device {
      margin: 24px 0;
      #toilet-device-container {
        width: 100%;
        height: 250px;
        margin-top: 20px;
      }
    }
    .toilet-build {
      .statistics {
        display: flex;
        margin-top: 24px;
        .left-content {
          display: flex;
          align-items: center;
          margin-right: 43px;
          ::v-deep.icon-info-show {
            .name {
              margin-left: -10px;
            }
          }
        }
        .right-content {
          padding-top: 10px;
          & > div {
            display: flex;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255,255,255,0.80);
            line-height: 23px;
            .label {
              margin-right: 24px;
            }
            .arrow-up {
              color: #11c372;
              .unit {
                color: rgba(255, 255, 255, 0.80);
                margin-left: 2px;
              }
            }
            .arrow-down {
              color: #ff4f5c;
            }
          }
        }
      }
      #toilet-build-container {
        width: 100%;
        height: 250px;
        margin-top: 20px;
      }
    }
  }
  .search-detail {
    margin-top: 107px;
    margin-bottom: 100px;
    position: absolute;
    top: 0;
    left: 500px;
    width: 400px;
    min-height: 874px;
    padding: 16px;
    background: rgba(0,45,88,0.80);
    border: 2px solid rgba(58,158,255,0.10);
    .dialog-title {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #0dc6ff;
      line-height: 22px;
      margin-bottom: 18px;
      img {
        float: right;
        cursor: pointer;
      }
    }
    .form-list {
      padding-right: 10px;
      .btn-list {
        .search-btn {
          float: right;
          width: 68px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background: radial-gradient(rgba(29,190,255,0.60), rgba(29,190,255,0.00));
          border: 1px solid;
          border-image: linear-gradient(180deg, rgba(58,158,255,0.60) 1%, rgba(58,158,255,0.10)) 1 1;
          box-shadow: 0px 0px 24px rgba(0,60,205,0.60) inset;
          margin-top: 3px;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
    .search-result {
      height: 580px;
      overflow-y: auto;
      margin-bottom: 10px;
      .list {
        .list-item {
          display: flex;
          margin-bottom: 12px;
          padding: 12px;
          background: rgba(0, 29, 57, 0.60);
          border: 1px solid #004384;
          .left-content {
            margin-right: 12px;
          }
          .right-content {
            line-height: 26px;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.90);
            .address {
              color: rgba(255, 255, 255, 0.60);
            }
            .info {
              color: rgba(255, 255, 255, 0.80);
              margin-top: 6px;
              .type {
                color: #11C372;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
  .remark-dialog {
    position: absolute;
    left: 50%;
    top: 40%;
    width: 378px;
    .bg-top {
      position: absolute;
      top: -19px;
      width: 100%;
    }
    .bg-bottom {
      position: absolute;
      bottom: -38px;
      width: 100%;
    }
    .dialog-content {
      height: 160px;
      background: rgba(0, 29, 57, 0.80);
      border: 2px solid rgba(58, 158, 255, 0.30);
      border-top: none;
      border-bottom: none;
      padding: 0 24px;
      .title {
        width: 100%;
        border-bottom: 1px dashed rgba(58, 158, 255, 0.50);
        margin-bottom: 12px;
        img {
          position: absolute;
          right: 24px;
          top: 0;
        }
        .name {
          font-size: 20px;
        }
        .address {
          line-height: 52px;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.80);
        }
      }
      .info {
        line-height: 28px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: rgba(255,255,255,0.60);
        line-height: 28px;
        .level {
          span {
            color: #FF4F5C;
          }
        }
      }
    }
  }
}
::v-deep .el-progress__text {
  font-size: 32px !important;
  color: #00cab5 !important;
  font-family: Michroma, Michroma-Regular !important;
}
</style>
