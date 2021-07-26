import echarts from 'echarts'
// 初始化图表
export const setEchartOptions = (ref, options) => {
  echarts.init(ref).setOption(options)
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