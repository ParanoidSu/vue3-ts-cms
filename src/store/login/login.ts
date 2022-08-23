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
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: [
        {
          id: 38,
          name: '系统总览',
          sort: 1,
          type: 1,
          url: '/main/analysis',
          icon: 'View',
          children: [
            {
              id: 138,
              name: '核心技术',
              sort: 2,
              type: 2,
              url: '/main/analysis/dashboard'
            },
            {
              id: 139,
              name: '商品统计',
              sort: 2,
              type: 2,
              url: '/main/analysis/overview'
            }
          ]
        },
        {
          id: 48,
          name: '系统管理',
          sort: 1,
          type: 1,
          url: '/main/system',
          icon: 'Setting',
          children: [
            {
              id: 149,
              name: '用户管理',
              sort: 2,
              type: 2,
              url: '/main/system/user'
            },
            {
              id: 140,
              name: '部门管理',
              sort: 2,
              type: 2,
              url: '/main/system/department'
            },
            {
              id: 141,
              name: '菜单管理',
              sort: 2,
              type: 2,
              url: '/main/system/menu'
            },
            {
              id: 142,
              name: '角色管理',
              sort: 2,
              type: 2,
              url: '/main/system/role'
            }
          ]
        },
        {
          id: 50,
          name: '商品中心',
          sort: 1,
          type: 1,
          url: '/main/product',
          icon: 'ShoppingBag',
          children: [
            {
              id: 158,
              name: '商品类别',
              sort: 2,
              type: 2,
              url: '/main/product/category'
            },
            {
              id: 159,
              name: '商品信息',
              sort: 2,
              type: 2,
              url: '/main/product/goods'
            }
          ]
        },
        {
          id: 60,
          name: '随便聊聊',
          sort: 1,
          type: 1,
          url: '/main/story',
          icon: 'ChatLineRound',
          children: [
            {
              id: 168,
              name: '你的故事',
              sort: 2,
              type: 2,
              url: '/main/story/chat'
            },
            {
              id: 169,
              name: '故事列表',
              sort: 2,
              type: 2,
              url: '/main/story/list'
            }
          ]
        }
      ]
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

      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      routes.push({
        path: '/:pathMatch(.*)',
        name: '/not-found',
        component: () => import('@/views/404NotFound/404NotFound.vue')
      })
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      // 本该是的版本
      const { id, token } = loginResult.data
      commit('changToken', token)
      LocalCache.setCache('token', 'dfadfasffaff')
      //  // 发送初始化请求
      dispatch('getInitialDataAction', null, { root: true })

      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      const userMenuResult = await requestUserMenusByRoleId(id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changToken', token)
        // 发送初始化请求
        dispatch('getInitialDataAction', null, { root: true })
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
