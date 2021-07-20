import { request } from '@/api/axios-config'

// 用于区别是哪个服务
const flag = getFlagNumber()

function getFlagNumber() {
  const href = window.location.href
  const reg = /flag=[^&|#|/]*/
  const res = href.match(reg)
  return res ? href.match(reg)[0].split('=')[1] : ''
}

export function getTokenByCode(code) {
  return request({
    url: '/oauth2/get_token_by_code',
    params: { code, flag }
  })
}

export function getUserInfoByToken(token) {
  return request({
    url: '/oauth2/get_userInfo_by_token',
    params: { token, flag }
  })
}

export function checkToken(token) {
  return request({
    url: '/oauth2/check_token',
    method: 'get',
    params: {
      token, flag
    }
  })
}

export function getCodeData(token) {
  const url = '/oauth2/codeDict'
  return request({
    url,
    method: 'get',
    data: {
      accessToken: token
    }
  })
}

export function logout(token) {
  const url = '/oauth2/exit'
  return request({
    url,
    method: 'get',
    params: { token }
  })
}