import { request } from './axios-config'
const domin = '/cockpit/enforce/case'

export const getCaseClose = () => {
  return request({
    url: domin + '/closed',
    method: 'get'
  })
}

export const getCaseAnalysis = (caseType = 0, timeLimit = 2) => {
  return request({
    url: domin + '/analysis',
    method: 'get',
    params: {
      caseType,
      timeLimit
    }
  })
}

export const getCaseHighIncidence = (timeLimit = 2) => {
  return request({
    url: domin + '/highIncidence',
    method: 'get',
    params: {
      timeLimit
    }
  })
}

export const getCaseStrength = (timeLimit = 2) => {
  return request({
    url: domin + '/strength',
    method: 'get',
    params: {
      timeLimit
    }
  })
}

export const getCasePoint = (timeLimit = 2) => {
  return request({
    url: domin + '/point',
    method: 'get',
    params: {
      timeLimit
    }
  })
}
export const getPeopleList = () => {
  return request({
    url: domin + '/staff',
    method: 'get'
  })
}

export const getCaseDetail = (id) => {
  return request({
    url: domin + '/detail',
    method: 'get',
    params: {
      id
    }
  })
}
export const getPeopleDetail = (userNo) => {
  return request({
    url: domin + '/staff/detail',
    method: 'get',
    params: {
      userNo
    }
  })
}

export const getPeoplePoints = (data) => {
  return request({
    url: '/position-web/realtime/list',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}

export const getPeopleTrack = (data) => {
  return request({
    url: '/position-web/historyPeople/findOne',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}
