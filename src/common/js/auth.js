import storage from '@/common/js/storage'
const APP_NAME = process.env.VUE_APP_NAME
const KEY_USERINFO = APP_NAME ? `userInfo_${APP_NAME}` : 'userInfo'

export let userInfoCache = (cache => {
  if (!cache) {
    return {}
  }
  try {
    return JSON.parse(cache)
  } catch (e) {
    storage.set(KEY_USERINFO, {})
    return {}
  }
})(storage.get(KEY_USERINFO))

export function getMenu() {
  return userInfoCache && userInfoCache.functionTreeList
}
function _getMenuByID(menus, id) {
  if (Array.isArray(menus)) {
    for (let i = 0, len = menus.length; i < len; i++) {
      if (menus[i].id === id) {
        return menus[i]
      }
    }
  }
  return null
}
export function getMenuByIDList(ids) {
  if (!userInfoCache && userInfoCache.functionTreeList) {
    return null
  }
  return [].concat(ids).reduce((data, id) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return _getMenuByID(data, id)
    } else if (Object.prototype.hasOwnProperty.call(data, 'children')) {
      return _getMenuByID(data.children, id)
    } else {
      return null
    }
  }, userInfoCache && userInfoCache.functionTreeList)
}
export function getToken() {
  return userInfoCache && userInfoCache.accessToken
}

export function getSystemType() {
  return userInfoCache && userInfoCache.systemType
}

export function getUser() {
  return userInfoCache && userInfoCache.user
}

export function getGroup() {
  return userInfoCache && userInfoCache.group
}

export function getProject() {
  return userInfoCache && userInfoCache.project
}

export function getFunctionList() {
  return userInfoCache && userInfoCache.functionList
}

export function getPidList() {
  return userInfoCache && userInfoCache.socketList
}

export function setUserInfo(value) {
  userInfoCache = value
  storage.set(KEY_USERINFO, value)
}

export function removeUserInfo() {
  userInfoCache = {}
  storage.remove(KEY_USERINFO)
}

export function saveJSONCode(data) {
  storage.set(`${APP_NAME}_json_code`, data)
}

export function getJSONCode() {
  return JSON.parse(storage.get(`${APP_NAME}_json_code`)) || {}
}
