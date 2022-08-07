import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import LocalCache from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: ''
    }
  },
  mutations: {
    changToken(state, token) {
      state.token = token
    },
    changUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      // 本该是的版本
      const { id, token } = loginResult.data
      commit('changToken', token)
      LocalCache.setCache('token', 'dfadfasffaff')

      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      const userMenuResult = await requestUserMenusByRoleId(id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
    // accountLoginPhone({commit}, payload){
    //   console.log('accountLoginPhone',payload);
    // }
  },
  getters: {}
}

export default loginModule
