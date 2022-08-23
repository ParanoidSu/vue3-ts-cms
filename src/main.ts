import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from './global'
import './service/axios-demo'
// import JlRequest from './service'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}

const app = createApp(App)

globalRegister(app)
// setupStore要放在use router上面 因为放在下面会导致install router时候没有注册动态路由
setupStore()
app.use(router)
app.use(store)
// app.use(globalRegister)
app.mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// JlRequest.get<DataType>({
//   url: '/home/multidata',
//   interceptors: {
//     requestInterceptors(config) {
//       console.log('单独的请求')
//       return config
//     },
//     responseInterceptors(config) {
//       console.log('单独的响应')
//       return config
//     }
//   }
// }).then((res) => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)
// })

// JlRequest.request({
//   url:'/home/multidata',
//   method:'GET'
// })
