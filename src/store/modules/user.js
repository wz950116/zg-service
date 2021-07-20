import { getUser, getMenu, getToken, removeUserInfo, setUserInfo } from '@/common/js/auth'
import { getTokenByCode, logout } from '@/api/login'

export default {
  state: {
    token: getToken(),
    user: getUser(),
    menu: getMenu(),
    mapCenter: [112.851831, 35.490701] // 晋城市
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    name: state => state.user.userName,
    userId: state => state.user.userId,
    menu: state => state.menu,
    mapCenter: state => state.mapCenter
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
    }
  },
  actions: {
    saveUserInfo({ commit }, tokenCode) {
      return new Promise((resolve, reject) => {
        getTokenByCode(tokenCode).then(({ success, data, message }) => {
          if (success) {
            commit('SET_TOKEN', data.accessToken)
            commit('SET_USER', data.user)
            commit('SET_MENU', data.functionTreeList || [])
            setUserInfo(data)
            resolve(data)
          } else {
            reject({ data, message })
          }
        }).catch(e => {
          reject(e)
        })
      })
    },
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (!state.token) {
          reject({ message: '无效的token，退出失败！', success: false })
          return
        }
        removeUserInfo()
        logout(state.token).then(({ code, message, data }) => {
          if (code !== '200') {
            reject({ message })
            return
          }
          resolve(data)
        }).catch((e) => {
          reject(e)
        })
      })
    },
    removeUserInfo({ commit }) {
      commit('SET_USER_INFO', removeUserInfo())
    }
  }
}
