import axios from 'axios'
import { AxiosInstance } from 'axios'
import { JLRequestInterceptors, JLConfig } from './type'
import { ElLoading } from 'element-plus'

class JLRequest {
  instance: AxiosInstance
  interceptors?: JLRequestInterceptors
  loadingInstance: any
  showLoading: boolean
  constructor(config: JLConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 拦截器默认开启与否
    this.showLoading = config.showLoading ?? false

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求拦截所有')
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            background: 'rgba(0,0,0,0.5)',
            text: '请求加载中...'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应拦截所有')
        setTimeout(() => {
          this.loadingInstance?.close()
        }, 1000)
        const data = res.data
        if (data.returnCode == '-1001') {
          console.log('请求失败,失败代码-1001')
        } else {
          return data
        }
      },
      (err) => {
        if (err.respone.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  request<T>(config: JLConfig): Promise<T> {
    return new Promise((resovle, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resovle(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: JLConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: JLConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: JLConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: JLConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATHC' })
  }
}

export default JLRequest
