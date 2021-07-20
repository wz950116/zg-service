import { request } from './axios-config'
const domin = '/cockpit'

// 城管动态
export const getNewsTotal = () => {
  return request({
    url: domin + '/ps/news/total',
    method: 'get'
  })
}

// 市民爆料
export const getDiscloseInfos = (params = { reportYear: new Date().getFullYear(), reportMonth: new Date().getMonth() + 1 }) => {
  return request({
    url: domin + '/ps/disclose/infos',
    method: 'get',
    params
  })
}

// 获取当前用户总人数
export const getPersonsCountHalfyear = () => {
  return request({
    url: domin + '/ps/persons/count/half-year',
    method: 'get'
  })
}

// 用户积分TOP排名
export const getPersonsTopCredit = () => {
  return request({
    url: domin + '/ps/persons/top/credit',
    method: 'get'
  })
}

// 获取当前用户总人数
export const getPersonsTotal = () => {
  return request({
    url: domin + '/ps/persons/total',
    method: 'get'
  })
}

// 市民最新上报
export const getDiscloseInfosTop = (params = {}) => {
  return request({
    url: domin + '/ps/disclose/infos/top',
    method: 'get',
    params
  })
}

// 市民本月上报指标？？？在哪用
export const getDiscloseMonthRatio = (params = {}) => {
  return request({
    url: domin + '/ps/disclose/month/ratio',
    method: 'get',
    params
  })
}

// 统计爆料上报信息
export const getDiscloseStatistics = (params = {}) => {
  return request({
    url: domin + '/ps/disclose/statistics',
    method: 'get',
    params
  })
}