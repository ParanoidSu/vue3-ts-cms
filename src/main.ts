import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import globalRegister from './global'
import './service/axios-demo'
import JlRequest from './service'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// registerApp(app)

app.use(router)
app.use(store)
app.use(globalRegister)
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
