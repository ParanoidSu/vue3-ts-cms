<template>
  <div class="echarts">
    <div
      ref="echartsDivRef"
      :style="{ width: props.width, height: props.height }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  onMounted,
  watchEffect,
  withDefaults,
  defineProps
} from '@vue/runtime-core'
import useEcharts from '../hooks/useEcheats'

const echartsDivRef = ref<HTMLElement>()

const props = withDefaults(
  defineProps<{
    options: any
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
onMounted(() => {
  const { setOption } = useEcharts(echartsDivRef.value!)
  watchEffect(() => {
    setOption(props.options)
  })
})
</script>

<style scoped></style>
