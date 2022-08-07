import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface JLRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) =>AxiosRequestConfig,
  requestInterceptorsCatch?: (err: any) =>any,
  responseInterceptors?: (config: any) =>any,
  responseInterceptorsCatch?: (err: any) => any
}

export interface JLConfig extends AxiosRequestConfig {
  interceptors?: JLRequestInterceptors
  showLoading?: boolean
}
