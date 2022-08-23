import * as echarts from 'echarts'

export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const setOption = (options: echarts.EChartsCoreOption) => {
    echartsInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })

  const setSize = () => {
    echartsInstance.resize()
  }

  return { echartsInstance, setOption, setSize }
}
