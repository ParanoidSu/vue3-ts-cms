import { createStore } from 'vuex'
import { IRootState } from './types'

import login from './login/login'
import system from './main/system/system'
import overview from './main/analysis/overview'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jiale',
      age: 18,
      entireDepartment: [
        {
          name: '总裁办',
          id: 1
        },
        {
          name: 'ceo',
          id: 2
        },
        {
          name: '市场部',
          id: 3
        }
      ],
      entirRole: [
        {
          name: 'ceo',
          id: 1
        },
        {
          name: 'cfo',
          id: 2
        },
        {
          name: 'cto',
          id: 3
        }
      ],
      entirMenu: [
        {
          name: '系统管理',
          id: 1,
          children: [
            {
              name: '用户管理',
              id: 21
            },
            {
              name: '部门管理',
              id: 22
            },
            {
              name: '菜单管理',
              id: 23
            },
            {
              name: '角色管理',
              id: 24
            }
          ]
        }
      ]
    }
  },
  mutations: {
    changeDeparmentList(state, list) {
      state.entireDepartment = list
    },
    changeRoleList(state, list) {
      state.entirRole = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction() {
      // 通过try catch 可以在上一个await失败时还能继续执行
      // try {
      //   const departmentResult = await getPgaeListData('/department/list', {
      //     offset: 0,
      //     size: 1000
      //   })
      //   const { list: departmentList } = departmentResult.data
      //   commit('changeDeparmentList', departmentList)
      // } catch (err) {
      //   console.log(err)
      // }
      // try {
      //   const roleResult = await getPgaeListData('/role/list', {
      //     offset: 0,
      //     size: 1000
      //   })
      //   const { list: roleList } = roleResult.data
      //   commit('changeRoleList', roleList)
      // } catch (err) {
      //   console.log(err)
      // }
    }
  },
  modules: {
    login,
    system,
    overview
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export default store
