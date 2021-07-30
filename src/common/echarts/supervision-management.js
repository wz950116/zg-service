import echarts from 'echarts'
const path = require('path')
const req = require.context('@/common/json', true, /\.json$/)
const cityMap = req.keys().map(key => path.basename(key, '.json'))
// 初始化图表
export const setEchartOptions = (ref, options, callback) => {
  const myChart = echarts.init(ref)
  myChart.setOption(options)
  if (callback) {
    myChart.on('click', function(params) {
      callback(params)
    })
  }
}

// 柱状图-监督管理-各地市事件运行情况
export const eventRunningAnaysis = (ref) => {
  setEchartOptions(ref, {
    grid: {
      x: '18%',
      y: '0',
      right: '20%',
      bottom: '0'
    },
    yAxis: [
      {
        type: 'category',
        name: '',
        data: ['杭州市', '宁波市', '嘉兴市', '绍兴市', '温州市', '台州市', '湖州市', '衢州市', '金华市', '舟山市', '丽水市'],
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 0,
          formatter: '{value} ',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.80)',
            fontSize: 12,
            fontWeight: 400
          }
        }
      }
    ],
    xAxis: [
      {
        type: 'value',
        name: '',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.65)'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '公厕数量',
        type: 'bar',
        barWidth: 14,
        label: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#ffffff',
            fontFamily: 'Michroma, Michroma-Regular'
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0, color: '#25a4ff'
            }, {
              offset: 1, color: '#d8f4fc'
            }])
          }
        },
        data: [97, 245, 221, 195, 98, 125, 220, 151, 120, 91, 245]
      }
    ]
  })
}

// 柱状图-监督管理-非正规垃圾堆放点整治
export const rubbishStackingAnaysis = (ref) => {
  setEchartOptions(ref, {
    grid: {
      y: '15%'
    },
    legend: {
      bottom: '0',
      itemGap: 24,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.80)'
      },
      data: ['已整治', '未整治']
    },
    xAxis: [
      {
        type: 'category',
        name: '',
        data: ['杭州市', '宁波市', '嘉兴市', '绍兴市', '温州市', '台州市', '湖州市', '衢州市', '金华市', '舟山市', '丽水市'],
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#666666'
          }
        },
        axisLabel: {
          interval: 0,
          rotate: -40,
          formatter: '{value} ',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 12,
            fontWeight: 400
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.65)'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.15)',
            type: 'dashed'
          }
        },
        axisLabel: {
          formatter: '{value} ',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 12,
            fontWeight: 400
          }
        }
      }
    ],
    series: [
      {
        name: '已整治',
        type: 'bar',
        stack: '整治',
        barWidth: 16,
        itemStyle: {
          normal: {
            color: '#009dff'
          }
        },
        data: [38, 25, 23, 16, 10, 18, 33, 23, 16, 20, 45]
      },
      {
        name: '未整治',
        type: 'bar',
        stack: '整治',
        barWidth: 16,
        itemStyle: {
          normal: {
            color: '#11c372'
          }
        },
        data: [38, 25, 23, 16, 10, 18, 33, 23, 16, 20, 45]
      }
    ]
  })
}

// 地图-监督管理-浙江省
export const provinceMapCharts = (ref, callback) => {
  setEchartOptions(ref, {
    series: [
      {
        type: 'map',
        map: '浙江',
        top: 50,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: 'white'
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#white'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'white'
          },
          emphasis: {
            borderColor: 'white',
            areaColor: '#ffdead'
          }
        },
        data: [
          { name: '杭州市', selected: false, value: 1 },
          { name: '湖州市', selected: false, value: 2 },
          { name: '嘉兴市', selected: false, value: 3 },
          { name: '宁波市', selected: false, value: 4 },
          { name: '台州市', selected: false, value: 5 },
          { name: '温州市', selected: false, value: 6 },
          { name: '丽水市', selected: false, value: 7 },
          { name: '衢州市', selected: false, value: 8 },
          { name: '金华市', selected: false, value: 9 },
          { name: '绍兴市', selected: false, value: 10 },
          { name: '舟山市', selected: false, value: 11 }
        ]
      }
    ],
    dataRange: {
      x: '-1000 px', // 图例横轴位置
      y: '-1000 px', // 图例纵轴位置
      splitList: [
        { start: 1, end: 1, label: '杭州市', color: '#11C372' },
        { start: 2, end: 2, label: '湖州市', color: '#11C372' },
        { start: 3, end: 3, label: '嘉兴市', color: '#FF4F5C' },
        { start: 4, end: 4, label: '宁波市', color: '#FDAD43' },
        { start: 5, end: 5, label: '台州市', color: '#11C372' },
        { start: 6, end: 6, label: '温州市', color: '#009DFF' },
        { start: 7, end: 7, label: '丽水市', color: '#FDAD43' },
        { start: 8, end: 8, label: '衢州市', color: '#FF4F5C' },
        { start: 9, end: 9, label: '金华市', color: '#009DFF' },
        { start: 10, end: 10, label: '绍兴市', color: '#FF4F5C' },
        { start: 11, end: 11, label: '舟山市', color: '#009DFF' }
      ]
    }
  }, callback)
}

// 地图-监督管理-杭州市
export const cityMapCharts = (ref, name) => {
  if (!cityMap.includes(name)) {
    setEchartOptions(ref, {
      series: [{
        type: 'map'
      }]
    })
    return
  }
  echarts.registerMap(name, require(`@/common/json/${name}.json`))
  setEchartOptions(ref, {
    series: [
      {
        type: 'map',
        mapType: name,
        top: 50,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: 'white'
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#white'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'white',
            areaColor: '#11C372'
          },
          emphasis: {
            borderColor: 'white',
            areaColor: '#ffdead'
          }
        },
        data: [
          { name: '淳安县', selected: false, value: 1 },
          { name: '建德市', selected: false, value: 2 },
          { name: '桐庐县', selected: false, value: 3 },
          { name: '富阳区', selected: false, value: 4 },
          { name: '萧山区', selected: false, value: 5 },
          { name: '钱塘区', selected: false, value: 6 },
          { name: '临平区', selected: false, value: 7 },
          { name: '余杭区', selected: false, value: 8 },
          { name: '临安区', selected: false, value: 9 },
          { name: '西湖区', selected: false, value: 10 },
          { name: '滨江区', selected: false, value: 11 },
          { name: '上城区', selected: false, value: 12 },
          { name: '拱墅区', selected: false, value: 13 }
        ]
      }
    ],
    dataRange: {
      x: '-1000 px', // 图例横轴位置
      y: '-1000 px', // 图例纵轴位置
      splitList: [
        { start: 1, end: 1, label: '淳安县', color: '#009DFF' },
        { start: 2, end: 2, label: '建德市', color: '#11C372' },
        { start: 3, end: 3, label: '桐庐县', color: '#FF4F5C' },
        { start: 4, end: 4, label: '富阳区', color: '#FDAD43' },
        { start: 5, end: 5, label: '萧山区', color: '#11C372' },
        { start: 6, end: 6, label: '温州市', color: '#11C372' },
        { start: 7, end: 7, label: '临平区', color: '#FF4F5C' },
        { start: 8, end: 8, label: '余杭区', color: '#11C372' },
        { start: 9, end: 9, label: '临安区', color: '#009DFF' },
        { start: 10, end: 10, label: '西湖区', color: '#FF4F5C' },
        { start: 11, end: 11, label: '滨江区', color: '#009DFF' },
        { start: 12, end: 12, label: '上城区', color: '#FDAD43' },
        { start: 13, end: 13, label: '拱墅区', color: '#009DFF' }
      ]
    }
  })
}