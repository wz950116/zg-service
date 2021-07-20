import { request } from './axios-config'
const domin = '/share/api/v1/share-api/data/4698ce737a8e4d1dbDf18061eaefb87D'

// 综合概览-城市指数-市容指数、市容指数环比
export const getCityFacePoint = () => {
  return request({
    url: domin + '/e50589871',
    method: 'get'
  })
}

// 综合概览-城市指数-部件指数、部件指数环比
export const getPartPoint = () => {
  return request({
    url: domin + '/e50659ef7',
    method: 'get'
  })
}

// 综合概览-城市指数-数据中心健康指数、数据中心健康指数环比
export const getCenterHealthPoint = () => {
  return request({
    url: domin + '/e59f4ab03',
    method: 'get'
  })
}

// 综合概览-城市指数-数字城管及时解决率、数字城管及时解决率环比、数字城管及时解决率同比
export const getSolvePoint = () => {
  return request({
    url: domin + '/e51516dd5',
    method: 'get'
  })
}

// 综合概览-城市指数-市民上报处置率、市民上报处置率环比、市民上报处置率同比
export const getUpHandlePoint = () => {
  return request({
    url: domin + '/e518a80f7',
    method: 'get'
  })
}

// 综合概览-城市指数-智能监测案卷占比、智能监测案卷占比环比、智能监测案卷占比同比
export const getIntellectWatchPoint = () => {
  return request({
    url: domin + '/e50cb5347',
    method: 'get'
  })
}

// 综合概览-紧急案件-轮播
export const getCarousel = () => {
  return request({
    url: domin + '/e50e86e54',
    method: 'get'
  })
}

// 综合概览-运行事件-本月紧急案件数、本月立案数、本月结案数
export const getUrgentCases = () => {
  return request({
    url: domin + '/e5116e60b',
    method: 'get'
  })
}

// 综合概览-运行事件-日立案数、日结案数
export const getDayCreateCases = () => {
  return request({
    url: domin + '/e5125b07e',
    method: 'get'
  })
}

// 综合概览-城区地图指数-环卫当月问题上报数
export const getEnvMonthCases = () => {
  return request({
    url: domin + '/e506a081b',
    method: 'get'
  })
}

// 综合概览-城区地图指数-街道办环卫当月问题处置率
export const getStreetEnvMonthResolveRate = () => {
  return request({
    url: domin + '/e5073b378',
    method: 'get'
  })
}

// 综合概览-城区地图指数-市政当月问题数
export const getCityMonthProblem = () => {
  return request({
    url: domin + '/e507c5a90',
    method: 'get'
  })
}

// 综合概览-城区地图指数-街道办市政问题处置率
export const getStreetCityResolveRate = () => {
  return request({
    url: domin + '/e50821c6a',
    method: 'get'
  })
}

// 综合概览-城区地图指数-市容当月问题数
export const getCityFaceProblem = () => {
  return request({
    url: domin + '/e5087c0bf',
    method: 'get'
  })
}

// 综合概览-城区地图指数-街道办市容问题处置率
export const getStreetCityFaceResolveRate = () => {
  return request({
    url: domin + '/e508a0512',
    method: 'get'
  })
}

// 综合概览-城区地图指数-街道办市民问题处置率
export const getStreetCitizenResolveRate = () => {
  return request({
    url: domin + '/e508d071e',
    method: 'get'
  })
}

// 数字城管-周办结率-街道办事处的本周案卷办结率
export const getStreetWeekResolveRate = () => {
  return request({
    url: domin + '/e55c843b2',
    method: 'get'
  })
}

// 数字城管-事件实时-本周上报数、本周立案数、本周结案数、立案率、紧急案件
export const getWeekCases = () => {
  return request({
    url: domin + '/e55d422f3',
    method: 'get'
  })
}

// 数字城管-事件实时-当月案卷趋势
export const getMonthCaeseTrend = () => {
  return request({
    url: domin + '/e55d92e2b',
    method: 'get'
  })
}

// 数字城管-区域运行-上报数、立案数、结案数
export const getCasesInfo = () => {
  return request({
    url: domin + '/e55e0deda',
    method: 'get'
  })
}

// 数字城管-区域运行-网格数
export const getGridNum = () => {
  return request({
    url: domin + '/e512b61f8',
    method: 'get'
  })
}

// 数字城管-区域运行-部件数
export const getPartNum = () => {
  return request({
    url: domin + '/e5bb5ccac',
    method: 'get'
  })
}

// 数字城管-区域运行-在线采集人员数量
export const getOnlinePersonNum = () => {
  return request({
    url: domin + '/e512d6688',
    method: 'get'
  })
}

// 数字城管-高发问题分析-高发类型
export const getHighOccurType = () => {
  return request({
    url: domin + '/e561cfb7a',
    method: 'get'
  })
}

// 数字城管-高发问题分析-高发社区
export const getHighOccurCommunity = () => {
  return request({
    url: domin + '/e561fa9dd',
    method: 'get'
  })
}

// 数字城管-高发问题分析-高发社区的前四小类
export const getHighOccurCommunityFour = (params = { community_name: '' }) => {
  return request({
    url: domin + '/e5624f381',
    method: 'get',
    params
  })
}

// 数字城管-高发问题分析-高发社区的当月立案趋势
export const getHighOccurCommunityWeekTrend = (params = { community_name: '' }) => {
  return request({
    url: domin + '/e562c3607',
    method: 'get',
    params
  })
}

// 数字城管-高发问题分析-重复发生点
export const getRepeatOccurPlace = () => {
  return request({
    url: domin + '/e5c3d5f69',
    method: 'get'
  })
}

// 数字城管-高发问题分析-重复发生点分布
export const getRepeatOccurPlaceSpread = () => {
  return request({
    url: domin + '/e5c7ba368',
    method: 'get'
  })
}

// 数字城管-高发问题分析-重复发生事件
export const getRepeatOccurEvent = () => {
  return request({
    url: domin + '/e5630ac7e',
    method: 'get'
  })
}

// 数字城管-高发问题分析-重复发生事件分布
export const getRepeatOccurEventSpread = () => {
  return request({
    url: domin + '/e563398d2',
    method: 'get'
  })
}

// 数字城管-gis查询人员
export const getRealtimeListPeople = params => {
  return request({
    url: '/position-web/realtime/list',
    method: 'post',
    data: params
  })
}
// 数字城管-人员详情
export const getRealtimeListPeopleDetail = params => {
  return request({
    url: domin + '/e7012fd0b',
    method: 'get',
    params
  })
}

// 数字城管-gis查询部件
export const getUnitTypeTree = () => {
  return request({
    url: '/ad-web/unit_type/tree/01',
    method: 'get'
  })
}
export const getUnitMetadataQuery = params => {
  return request({
    url: '/ad-web/unit/metadata/query',
    method: 'post',
    data: params
  })
}
export const getUnitEntityPoints = params => {
  return request({
    url: '/ad-web/unit/entity/points',
    method: 'post',
    data: params
  })
}

// 数字城管-gis查询人员轨迹
export const getRtslPeopleByCodes = params => {
  return request({
    url: '/position-web/rtsl/getRtslPeopleByCodes',
    method: 'post',
    data: params
  })
}