import { request } from './axios-config'
const domin = '/cockpit'

// 大屏数据
export const getMunicipalData = (timeLimit = 1) => {
  return request({
    url: domin + '/municipal/data',
    method: 'get',
    params: {
      timeLimit
    }
  })
}

// 地图部件
export const getMunicipalPoint = (type = 1) => {
  return request({
    url: domin + '/municipal/point',
    method: 'get',
    params: {
      type
    }
  })
}

// 部件详情信息
export const getMunicipalDetail = (id, type) => {
  return request({
    url: domin + '/municipal/detail',
    method: 'get',
    params: {
      type,
      id
    }
  })
}
