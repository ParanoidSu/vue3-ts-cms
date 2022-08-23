<template>
  <div class="overview">
    <el-row :gutter="10">
      <el-col :span="7">
        <JlCard title="分类商品数量(饼图)">
          <PieEcharts :pieData="categoryGoodCount"></PieEcharts>
        </JlCard>
      </el-col>
      <el-col :span="10">
        <JlCard title="不同城市商品销量"></JlCard>
      </el-col>
      <el-col :span="7">
        <JlCard title="分类商品数量(玫瑰图)">
          <RoseEcharts :pieData="categoryGoodCount"></RoseEcharts>
        </JlCard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <JlCard title="分类商品数量">
          <LineEcharts v-bind="categoryGoodsSale"></LineEcharts>
        </JlCard>
      </el-col>
      <el-col :span="12">
        <JlCard title="分类商品的收藏">
          <BarEcharts v-bind="categoryGoodsFavor"></BarEcharts>
        </JlCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import JlCard from '@/base-ui/card'
import {
  PieEcharts,
  RoseEcharts,
  LineEcharts,
  BarEcharts
} from '@/components/page-echarts'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'overview',
  components: {
    JlCard,
    PieEcharts,
    RoseEcharts,
    LineEcharts,
    BarEcharts
  },
  setup() {
    const store = useStore()

    // 传递数据
    const categoryGoodCount = computed(() => {
      return store.state.overview.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLableData: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.overview.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLableData.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLableData, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLableData: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.overview.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLableData.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLableData, values }
    })

    return { categoryGoodCount, categoryGoodsSale, categoryGoodsFavor }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
