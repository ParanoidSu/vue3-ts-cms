import { Module } from 'vuex'
import { IOverviewState } from './type'
import { IRootState } from '@/store/types'

const overviewModule: Module<IOverviewState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [
        {
          id: 2,
          name: '上衣',
          goodsCount: 14
        },
        {
          id: 3,
          name: '裤子',
          goodsCount: 58
        },
        {
          id: 4,
          name: '鞋子',
          goodsCount: 95
        },
        {
          id: 5,
          name: '厨具',
          goodsCount: 27
        }
      ],
      categoryGoodsSale: [
        {
          id: 2,
          name: '上衣',
          goodsCount: 60911
        },
        {
          id: 3,
          name: '裤子',
          goodsCount: 52512
        },
        {
          id: 4,
          name: '鞋子',
          goodsCount: 196473
        },
        {
          id: 5,
          name: '厨具',
          goodsCount: 139744
        }
      ],
      categoryGoodsFavor: [
        {
          id: 2,
          name: '上衣',
          goodsFavor: 6091
        },
        {
          id: 3,
          name: '裤子',
          goodsFavor: 5251
        },
        {
          id: 4,
          name: '鞋子',
          goodsFavor: 19647
        },
        {
          id: 5,
          name: '厨具',
          goodsFavor: 13974
        }
      ],
      addressGoodsSale: [
        {
          address: '上海',
          count: 62975
        },
        {
          address: '北京',
          count: 77777
        },
        {
          address: '深圳',
          count: 875641
        },
        {
          address: '广州',
          count: 52975
        },
        {
          address: '杭州',
          count: 35788
        }
      ]
    }
  }
}

export default overviewModule
