import echarts from 'echarts'
const path = require('path')
const req = require.context('@/common/json', true, /\.json$/)
const cityMap = req.keys().map(key => path.basename(key, '.json'))

const linesData = {
  saddr: {
    name: '省中心',
    fromCoord: [120.141079, 30.26705]
  },
  eaddr: [
    {
      name: '湖州',
      value: '1200000',
      toCoord: [120.086823, 30.894348]
    },
    {
      name: '嘉兴',
      value: '12000',
      toCoord: [120.755486, 30.746129]
    },
    {
      name: '舟山',
      value: '1448200',
      toCoord: [122.207215, 29.985295]
    },
    {
      name: '宁波',
      value: '2400000',
      toCoord: [121.550357, 29.874556]
    },
    {
      name: '绍兴',
      value: '1206000',
      toCoord: [120.580232, 30.029752]
    },
    {
      name: '台州',
      value: '1206000',
      toCoord: [121.420757, 28.656386]
    },
    {
      name: '温州',
      value: '1206000',
      toCoord: [120.699366, 27.994267]
    },
    {
      name: '丽水',
      value: '1206000',
      toCoord: [119.922796, 28.46763]
    },
    {
      name: '金华',
      value: '1206000',
      toCoord: [119.647444, 29.079059]
    },
    {
      name: '衢州',
      value: '1206000',
      toCoord: [118.859457, 28.970079]
    }
  ]
}

var convertData = function (data) {
  var res = []
  const { saddr, eaddr } = data
  for (var i = 0; i < eaddr.length; i++) {
    var dataItem = eaddr[i]
    res.push({
      fromName: saddr.name,
      toName: dataItem.name,
      coords: [saddr.fromCoord, dataItem.toCoord],
      value: dataItem.value
    })
  }
  return res
}
// ECharts Option配置
// 初始化图表
export const setEchartOptions = (ref, options, callback) => {
  const myChart = echarts.init(ref)
  myChart.setOption(options)
  if (callback) {
    myChart.on('click', function (params) {
      callback(params)
    })
  }
  window.addEventListener('resize', () => { myChart.resize() })
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
        name: '浙江',
        type: 'map',
        map: '浙江',
        top: 50,
        showLegendSymbol: false,
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
            opacity: 0.8
          },
          emphasis: {
            borderColor: 'white',
            borderWidth: 3
          }
        },
        data: [
          { name: '杭州市', selected: false, value: 100 },
          { name: '湖州市', selected: false, value: 100 },
          { name: '嘉兴市', selected: false, value: 40 },
          { name: '宁波市', selected: false, value: 60 },
          { name: '台州市', selected: false, value: 100 },
          { name: '温州市', selected: false, value: 80 },
          { name: '丽水市', selected: false, value: 60 },
          { name: '衢州市', selected: false, value: 40 },
          { name: '金华市', selected: false, value: 80 },
          { name: '绍兴市', selected: false, value: 40 },
          { name: '舟山市', selected: false, value: 80 }
        ]
      }
    ],
    dataRange: {
      x: 'right',
      y: 'bottom',
      align: 'left',
      padding: [0, 70, 0, 0],
      textStyle: {
        color: 'white'
      },
      splitList: [
        { start: 0, end: 59, label: '不合格' },
        { start: 60, end: 79, label: '合格' },
        { start: 80, end: 89, label: '良好' },
        { start: 90, end: 100, label: '优秀' }
      ],
      color: ['#11C372', '#009DFF', '#FDAD43', '#FF4F5C']
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
            opacity: 0.8
          },
          emphasis: {
            borderColor: 'white',
            borderWidth: 3
          }
        },
        data: [
          { name: '淳安县', selected: false, value: 80 },
          { name: '建德市', selected: false, value: 100 },
          { name: '桐庐县', selected: false, value: 20 },
          { name: '富阳区', selected: false, value: 60 },
          { name: '萧山区', selected: false, value: 100 },
          { name: '钱塘区', selected: false, value: 100 },
          { name: '临平区', selected: false, value: 20 },
          { name: '余杭区', selected: false, value: 100 },
          { name: '临安区', selected: false, value: 80 },
          { name: '西湖区', selected: false, value: 20 },
          { name: '滨江区', selected: false, value: 80 },
          { name: '上城区', selected: false, value: 60 },
          { name: '拱墅区', selected: false, value: 80 }
        ]
      }
    ],
    dataRange: {
      x: 'right',
      y: 'bottom',
      align: 'left',
      padding: [0, 70, 0, 0],
      textStyle: {
        color: 'white'
      },
      splitList: [
        { start: 0, end: 59, label: '不合格' },
        { start: 60, end: 79, label: '合格' },
        { start: 80, end: 89, label: '良好' },
        { start: 90, end: 100, label: '优秀' }
      ],
      color: ['#11C372', '#009DFF', '#FDAD43', '#FF4F5C']
    }
  })
}

// 地图-监督管理-飞线
export const flyLineCharts = (ref) => {
  setEchartOptions(ref, {
    // 加载 amap 组件
    amap: {
      center: [120.141079, 30.26705],
      resizeEnable: true,
      mapStyle: 'amap://styles/36fa8614fd5a353872b1c2d503e006c2',
      rotation: 10,
      zoom: 8, // 缩放
      viewMode: '3D', // 是否启用3d地图
      pitch: 35, // 视角高度
      skyColor: '#33216a'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      // 路线
      {
        type: 'lines',
        zlevel: 2,
        coordinateSystem: 'amap',
        lineStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#47b3fe'
            }, {
              offset: 0.3, color: '#25a4ff'
            }, {
              offset: 0.8, color: '#25a4ff'
            }, {
              offset: 1, color: '#d8f4fc'
            }]),
            width: 2, // 尾迹线条宽度
            opacity: 1, // 尾迹线条透明度
            curveness: -0.3 // 尾迹线条曲直度
          }
        },
        data: convertData(linesData)
      },
      // 终点
      {
        type: 'effectScatter',
        coordinateSystem: 'amap',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'bottom',
            formatter: '{b}',
            fontSize: 20,
            textStyle: {
              color: 'white'
            }
          }
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#d8f4fc'
          }, {
            offset: 0.89, color: '#25a4ff'
          }])
        },
        data: linesData.eaddr.map(function (dataItem) {
          return {
            name: dataItem.name,
            value: dataItem.toCoord.concat([dataItem.value])
          }
        })
      },
      // 起点
      {
        type: 'scatter',
        coordinateSystem: 'amap',
        zlevel: 3,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'bottom',
            formatter: '{b}',
            fontSize: 20,
            textStyle: {
              color: 'white'
            }
          }
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#d8f4fc'
          }, {
            offset: 0.89, color: '#25a4ff'
          }])
        },
        data: [
          {
            name: linesData.saddr.name,
            value: linesData.saddr.fromCoord
          }
        ]
      }
    ]
  })
}