import echarts from 'echarts'
// 初始化图表
export const setEchartOptions = (ref, options) => {
  echarts.init(ref).setOption(options)
}
// 柱状图-综合评价
export const categoryAnaysis = ({ ref, xName, barColor, data }) => {
  setEchartOptions(ref, {
    grid: {
      x: '12%',
      y: '20%',
      bottom: '20%',
      right: '5%'
    },
    xAxis: [
      {
        type: 'category',
        name: '',
        data: xName,
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.21)'
          }
        },
        axisLabel: {
          interval: 0,
          formatter: '{value}',
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
        min: 0,
        max: 100,
        interval: 25,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.15)'
          }
        },
        axisLabel: {
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
        name: '',
        type: 'bar',
        barWidth: 25,
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          textStyle: {
            color: '#ffffff',
            fontFamily: 'PingFangSC, PingFangSC-Regular'
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, barColor)
          }
        },
        data
      }
    ]
  })
}
// 柱状图（横向）-综合评价
export const yCategoryAnaysis = (ref) => {
  setEchartOptions(ref, {
    grid: {
      x: '20%',
      y: '0',
      right: '30%',
      bottom: '15%'
    },
    yAxis: [
      {
        type: 'category',
        name: '',
        data: ['道路设施', '电力通信', '广告招牌', '灯光照明', '园林绿地', '施工工地'],
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.21)'
          }
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
        name: '(发现处置率)',
        nameTextStyle: {
          color: '#ffffff',
          padding: [25, 0, 0, 5]
        },
        min: 0,
        max: 100,
        interval: 25,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.15)'
          }
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#ffffff',
            fontSize: 12,
            fontWeight: 400
          }
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
          formatter: '{c}%',
          textStyle: {
            color: '#ffffff',
            fontSize: 10,
            fontFamily: 'PingFangSC, PingFangSC-Regular'
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0, color: '#009dff'
            }, {
              offset: 1, color: '#66d6ff'
            }])
          }
        },
        data: [78, 90, 83, 87, 60, 88]
      }
    ]
  })
}