/* 用于修改 axios 的一些公用配置，具体参看文档 */
import axios from 'axios'
import store from '@/store/index.js'
import qs from 'qs'
import { isJSON } from '@/common/js/utils'
import { getToken } from '@/common/js/auth'

axios.defaults.transformRequest = (data, headers) => {
  if (store.getters.token) {
    headers.accesstoken = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  if (headers['Content-Type'] === 'application/x-www-form-urlencoded' && data && Object.prototype.toString.call(data) === '[object Object]') {
    data = qs.stringify(data)
  }
  if (headers['Content-Type'] === 'application/json' && data && (Object.prototype.toString.call(data) === '[object Object]' || Object.prototype.toString.call(data) === '[object Array]')) {
    data = JSON.stringify(data)
  }
  return data
}

const newAxios = axios.create({
  // baseURL: process.env.VUE_APP_ROOT_URL,
  // baseURL: 'http://10.10.71.3:8080',
  timeout: 15000
})

newAxios.interceptors.request.use(config => {
  if (config.params.toString === '[object Object]') { config.params.__timeStamp = new Date().getTime() }
  return config
}, err => {
  return Promise.reject(err)
})

newAxios.interceptors.response.use(response => {
  const accesstoken = response.headers.accesstoken
  const res = isJSON(response.data) ? JSON.parse(response.data) : response.data
  if (accesstoken && res.data) {
    res.data.accesstoken = accesstoken
  }
  return response.data
}, err => {
  return Promise.reject(err)
})

export function request(_param) {
  const {
    method = 'get',
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType = 'json', // 默认的
    headers = {},
    url = '',
    params,
    data,
    ...otherData
  } = _param

  if (!url) {
    return new Promise((resolve, reject) => {
      reject(new Error('url is null'))
    })
  }
  const _method = method.toLowerCase()

  if (_method === 'get') {
    return newAxios({
      responseType,
      url,
      headers,
      method,
      params: params || data || otherData
    })
  }

  if (_method === 'post' || _method === 'delete' || _method === 'put') {
    if (!Object.prototype.hasOwnProperty.call(headers, 'Content-Type')) {
      headers['Content-Type'] = 'application/json'
    }
    if (params && data) {
      return newAxios({
        responseType,
        url,
        headers,
        method,
        params,
        data
      })
    } else {
      const { start, limit, ...resetData } = otherData
      return newAxios({
        responseType,
        url,
        headers,
        method,
        params: params || { start, limit },
        data: data || resetData
      })
    }
  }
}

export default newAxios