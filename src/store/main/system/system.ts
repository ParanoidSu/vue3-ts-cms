import {
  getPgaeListData,
  deletePageListDate,
  editPageListDate,
  newPageListDate
} from '@/service/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [
        {
          id: 1,
          name: 'sjl',
          realname: 'sjl',
          cellphone: '18888888888',
          enable: 1,
          departmentId: 2,
          roleId: 3,
          createAt: '2021-02-02T07:24:12.00Z',
          updateAt: '2021-02-02T07:24:14.00Z'
        },
        {
          id: 2,
          name: 'sjl2',
          realname: 'sjl2',
          cellphone: '18888888887',
          enable: 0,
          departmentId: 1,
          roleId: 1,
          createAt: '2021-03-02T07:24:12.00Z',
          updateAt: '2021-03-02T07:24:14.00Z'
        },
        {
          id: 3,
          name: 'sj3',
          realname: 'sj3',
          cellphone: '188812318888',
          enable: 1,
          departmentId: 2,
          roleId: 1,
          createAt: '2021-04-02T07:24:12.00Z',
          updateAt: '2021-04-02T07:24:14.00Z'
        },
        {
          id: 4,
          name: 'sjl4',
          realname: 'sjl4',
          cellphone: '1812318888',
          enable: 0,
          departmentId: 2,
          roleId: 2,
          createAt: '2021-04-02T07:24:12.00Z',
          updateAt: '2021-04-02T07:24:14.00Z'
        },
        {
          id: 5,
          name: 'sjl5',
          realname: 'sjl5',
          cellphone: '188888888558',
          enable: 1,
          departmentId: 2,
          roleId: 1,
          createAt: '2021-06-02T07:24:12.00Z',
          updateAt: '2021-06-02T07:24:14.00Z'
        },
        {
          id: 6,
          name: 'sjl6',
          realname: 'sjl6',
          cellphone: '18888888866',
          enable: 1,
          departmentId: 1,
          roleId: 3,
          createAt: '2021-06-02T07:24:12.00Z',
          updateAt: '2021-06-02T07:24:14.00Z'
        }
      ],
      userCount: 6,
      roleList: [
        {
          id: 1,
          name: '超级管理员',
          intro: '所有权限',
          createAt: '2022-01-02T10:10:55.00Z',
          updateAt: '2022-02-02T10:10:55.00Z'
        },
        {
          id: 3,
          name: '运营',
          intro: '日常事务',
          createAt: '2022-01-03T10:10:55.00Z',
          updateAt: '2022-02-03T10:10:55.00Z'
        },
        {
          id: 4,
          name: '人事',
          intro: '人事管理',
          createAt: '2022-03-02T10:10:55.00Z',
          updateAt: '2022-04-02T10:10:55.00Z'
        }
      ],
      roleCount: 3,
      goodsList: [
        {
          id: 7,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '127',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl:
            'https://i0.hdslb.com/bfs/archive/5b8cfd2c03e653106b1c9c37ba2025e39afc0ad1.png@324w_156h.webp',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 8,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '128',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl:
            'https://gw.alicdn.com/imgextra/i4/2104668892/O1CN01BZA2Jx2FYaae4oSAe_!!2104668892.jpg_Q75.jpg_.webp',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 9,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '129',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 1,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1211',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 12,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1227',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 217,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1457',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 78,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1927',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 787,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '15627',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 897,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1217',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 789,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '12237',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 72,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1127',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 77,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '12327',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 97,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '1527',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 87,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '12127',
          newPrice: '89',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        },
        {
          id: 97,
          name: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE1998',
          oldPrice: '127',
          newPrice: '99',
          desc: 'UR2022春季新品女装复古气质菱格薄款宝藏连衣裙WU02S7EE2000',
          status: 1,
          imgUrl: '',
          inventoryCount: 4044,
          saleCount: 21897,
          favorCount: 222,
          addredd: '上海',
          categoryId: 7,
          createAt: '2021-04-30T13:40:30.000Z',
          updateAt: '2021-05-30T13:40:30.000Z'
        }
      ],
      goodsCount: 15,
      menuList: [
        {
          id: 38,
          name: '系统总览',
          type: 1,
          url: '/main/analysis',
          sort: 1,
          createAt: '2022-08-17T20:58:02.000Z',
          updateAt: '2022-08-17T20:58:02.000Z',
          children: [
            {
              id: 138,
              name: '核心技术',
              url: '/main/analysis/dashboard',
              type: 2,
              createAt: '2022-08-17T20:58:02.000Z',
              updateAt: '2022-08-17T20:58:02.000Z'
            },
            {
              id: 148,
              name: '商品统计',
              url: '/main/analysis/overview',
              type: 2,
              createAt: '2032-08-17T20:58:02.000Z',
              updateAt: '2032-08-17T20:58:02.000Z'
            }
          ]
        }
      ],
      menuCount: 10
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.roleList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.roleCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.roleList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.roleCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        // switch (pageName) {
        //   case 'user':
        //     return state.userList
        //   case 'role':
        //     return state.roleList
        // }
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`
      console.log(pageUrl)

      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/user/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }

      const pageResult = await getPgaeListData(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'user':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
    },

    async deletePageListAction({ dispatch }, payload) {
      // 发送delete请求
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      await deletePageListDate(pageUrl)

      // 调用getPageListAction重新发送请求 刷新页面
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          siez: 10
        }
      })
    },

    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`

      await editPageListDate(pageUrl, editData)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async newPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`

      await newPageListDate(pageUrl, newData)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
