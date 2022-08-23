<template>
  <div class="rose-echarts">
    <BaseEcharts :options="options"></BaseEcharts>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from '@vue/runtime-core'
import BaseEcharts from '@/base-ui/echarts'
import { IDataType } from '@/service/types'

const props = defineProps<{
  pieData: IDataType[]
}>()

const options = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.pieData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
