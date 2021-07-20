import echarts from 'echarts'
// 初始化图表
export const setEchartOptions = (ref, options) => {
  echarts.init(ref).setOption(options)
}

// 饼图-公众服务-停车场分类统计
export const stopSortAnaysis = (ref) => {
  setEchartOptions(ref, {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      icon: 'circle',
      orient: 'vertical',
      bottom: 'bottom',
      textStyle: {
        color: 'rgba(255, 255, 255, 0.60)',
        fontSize: 12
      },
      itemHeight: 8, // 图例的高度
      itemGap: 24 // 图例之间的间距
    },
    series: [
      {
        name: '停车场分类统计',
        type: 'pie',
        radius: '50%',
        data: [
          {
            value: 29.91,
            name: '公共停车场',
            itemStyle: {
              color: '#009DFF'
            }
          },
          {
            value: 29.49,
            name: '配件停车场',
            itemStyle: {
              color: '#5B76FF'
            }
          },
          {
            value: 40.60,
            name: '道路停车场',
            itemStyle: {
              color: '#00CAB5'
            }
          }
        ],
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
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.90)'
            },
            formatter: '{d}%'
          }
        }
      }
    ]
  })
}

// 柱状图-公众服务-各城市公厕设施数据统计
export const toiletDeviceAnaysis = (ref) => {
  setEchartOptions(ref, {
    grid: {
      x: '12%', // x 偏移量
      y: '15%' // y 偏移量
    },
    legend: {
      bottom: '5%',
      itemGap: 31,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.65)'
      },
      data: [{
        name: '公厕数量',
        icon: 'rect'
      }, {
        name: '公厕设置密度',
        icon: 'line'
      }]
    },
    xAxis: [
      {
        type: 'category',
        name: '',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
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
        name: '(个)',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.65)'
        },
        min: 0,
        max: 40,
        interval: 8,
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
      },
      {
        type: 'value',
        name: '',
        min: 2,
        max: 4.5,
        interval: 0.5,
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
        name: '公厕数量',
        type: 'bar',
        barWidth: 14,
        itemStyle: {
          normal: {
            color: '#009DFF'
          }
        },
        data: [38, 25, 23, 16, 10, 18, 33, 23, 16, 20]
      },
      {
        name: '公厕设置密度',
        type: 'line',
        yAxisIndex: 1,
        symbol: 'none',
        itemStyle: {
          normal: {
            color: '#11C372',
            lineStyle: {
              color: '#11C372'
            }
          }
        },
        data: [3.7, 3.8, 3.9, 3.55, 3.2, 3.7, 4.1, 3.9, 3.7, 3.6]
      }
    ]
  })
}

// 折线图-公众服务-公共厕所“五化”建设
export const toiletBuildAnaysis = (ref) => {
  setEchartOptions(ref, {
    grid: {
      x: '15%', // x 偏移量
      y: '10%' // y 偏移量
    },
    legend: {
      bottom: '5%',
      itemGap: 31,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.65)'
      },
      data: [{
        name: '公厕设置密度',
        icon: 'line'
      }]
    },
    xAxis: {
      type: 'category',
      data: [2018, 2019, 2020],
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
        formatter: '{value} ',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.65)',
          fontSize: 12,
          fontWeight: 400
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '',
      min: 760,
      max: 1080,
      interval: 80,
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
    },
    series: [
      {
        name: '公厕设置密度',
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#009dff'
            }, {
              offset: 1, color: 'rgba(0, 157, 255, 0.00)'
            }]
            ),
            lineStyle: {
              color: '#009DFF'
            }
          }
        },
        data: [900, 925, 1050]
      }
    ]
  })
}