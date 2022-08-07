// service统一出口
import JLRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const JlRequest = new JLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      const token = '123'
      if (token) {
        config.headers = {
          Authorzation: `Bearer ${token}`
        }
      }
      console.log('拦截成功')
      return config
    },
    responseInterceptors(config) {
      console.log('响应拦截')
      return config
    }
  }
})

export default JlRequest
