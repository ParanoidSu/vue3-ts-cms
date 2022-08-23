<template>
  <div class="line-echarts">
    <BaseEcharts :options="options"></BaseEcharts>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from '@vue/runtime-core'
import BaseEcharts from '@/base-ui/echarts'

const props = defineProps<{
  xLableData: string[]
  values: any[]
}>()

const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLableData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
