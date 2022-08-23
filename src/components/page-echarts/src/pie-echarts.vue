<template>
  <div class="pie-echarts">
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
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
