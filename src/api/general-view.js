import { request } from './axios-config'
const domin = '/cockpit'

// 综合概览-物联监控
export const getStreetCompr = () => {
  return request({
    url: domin + '/street/compr',
    method: 'get'
  })
}

// 综合概览-人员及车辆在线数
export const sanitationOnline = () => {
  return request({
    url: domin + '/sanitation/online',
    method: 'get'
  })
}

// 综合概览-关键指标-绿化率分析数据
export const gardenAfforestedRateIndex = () => {
  return request({
    url: domin + '/garden/afforestedRate/index',
    method: 'get'
  })
}

// 综合概览-城区-绿化率(按照街道统计))
export const gardenAfforestedRateStreet = () => {
  return request({
    url: domin + '/garden/afforestedRate/street',
    method: 'get'
  })
}

// 综合概览-地区-公用问题上报数(按街道划分)
export const utilityProblemNums = () => {
  return request({
    url: domin + '/utility/problemNums',
    method: 'get'
  })
}

// 综合概览-关键指标-亮灯率分析数据
export const municipalLightRateIndex = () => {
  return request({
    url: domin + '/municipal/lightRate/index',
    method: 'get'
  })
}

// 根据街道统计商家
export const streetStoreStreet = () => {
  return request({
    url: domin + '/street/store/street',
    method: 'get'
  })
}