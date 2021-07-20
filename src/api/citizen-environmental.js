import { request } from './axios-config'
const domin = '/cockpit'

// 告警数量统计
export const getStreetAlarmCount = (params = {}) => {
  return request({
    url: domin + '/street/alarm/count',
    method: 'get',
    params
  })
}

// 最近告警列表（10）
export const getStreetAlarmList = () => {
  return request({
    url: domin + '/street/alarm/list',
    method: 'get'
  })
}

// 摄像头数量
export const getStreetCameraCount = () => {
  return request({
    url: domin + '/street/camera/count',
    method: 'get'
  })
}

// 摄像头视频流地址
export const getStreetCameraVideo = (params = {}) => {
  return request({
    url: domin + '/street/camera/video',
    method: 'get',
    params
  })
}

// 所有摄像头
export const getStreetCameras = () => {
  return request({
    url: domin + '/street/cameras',
    method: 'get'
  })
}

// 立案数量统计
export const getStreetCaseCount = () => {
  return request({
    url: domin + '/street/case/count',
    method: 'get'
  })
}

// 立案类型列表
export const getStreetCaseType = (params = {}) => {
  return request({
    url: domin + '/street/case/type',
    method: 'get',
    params
  })
}

// 市容监管-市容AI统计
export const getStreetSuper = () => {
  return request({
    url: domin + '/street/super',
    method: 'get'
  })
}

// 市容监管-部件展示
export const gardenParts = () => {
  return request({
    url: domin + '/garden/parts',
    method: 'get'
  })
}

// 市容监管-绿化分析
export const gardenStatistics = () => {
  return request({
    url: domin + '/garden/statistics',
    method: 'get'
  })
}

// 市容监管-环卫车辆地图部件
export const sanitationCarParts = () => {
  return request({
    url: domin + '/sanitation/car/parts',
    method: 'get'
  })
}

// 市容监管-环卫车辆历史轨迹(最多1个月时间跨度)
export const sanitationHistory = (params = { sn: '', startTime: '', endTime: '' }) => {
  return request({
    url: domin + '/sanitation/history',
    method: 'get',
    params
  })
}

// 市容监管-公厕地图部件
export const sanitationToiletParts = () => {
  return request({
    url: domin + '/sanitation/toilet/parts',
    method: 'get'
  })
}

// 市容监管-环境卫生模块数据
export const sanitationAnalysis = () => {
  return request({
    url: domin + '/sanitation/analysis',
    method: 'get'
  })
}