import echarts from 'echarts'
// 初始化图表
export const setEchartOptions = (ref, options) => {
  echarts.init(ref).setOption(options)
}
// 运行事件-环形图
export const pieRunEvent = (ref, series) => {
  setEchartOptions(ref, {
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{a} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      icon: 'circle',
      textStyle: {
        color: 'rgba(255, 255, 255, 0.60)',
        fontSize: 12
      },
      x: '70%',
      top: '20%',
      itemHeight: 8, // 图例的高度
      itemGap: 10, // 图例之间的间距
      data: ['市容管理', '清扫保洁', '建筑垃圾', '生活垃圾', '其他']
    },
    series
  })
}