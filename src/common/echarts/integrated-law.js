import echarts from 'echarts'
// 初始化图表
export const setEchartOptions = (ref, options) => {
  echarts.init(ref).setOption(options)
}
// 曲线图-长三角一体化执法-联合执法事件趋势
export const combineLawTrend = (ref) => {
  setEchartOptions(ref, {
    grid: {
      x: '10%',
      y: '15%',
      bottom: '20%',
      right: '5%'
    },
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      rotate: -40,
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
        formatter: '{value}\n月',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.80)',
          fontWeight: 400
        }
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
          type: 'dashed'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.80)',
          fontWeight: 400
        }
      }
    },
    series: [{
      data: [13, 16, 12, 25, 16, 20, 15, 11, 15, 18, 17, 10],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0, color: '#fdad43'
          }, {
            offset: 1, color: '#00cab5'
          }
        ])
      }
    }]
  })
}

export const pieCommonCharts = (ref, { legendData, seriesData }) => {
  setEchartOptions(ref, {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: [{
      data: legendData,
      icon: 'circle',
      bottom: '0',
      itemGap: 16,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.60)',
        padding: [3, 0, 0, 0],
        height: 24,
        fontSize: 12
      }
    }],
    series: [
      {
        name: '',
        type: 'pie',
        radius: '40%',
        center: ['50%', '40%'],
        data: seriesData,
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.25)'
            }
          }
        },
        label: {
          normal: {
            textStyle: {
              fontSize: 12,
              fontFamily: 'Michroma, Michroma-Regular',
              color: 'rgba(255, 255, 255, 0.90)'
            },
            formatter: '{d}%'
          }
        }
      }
    ]
  })
}