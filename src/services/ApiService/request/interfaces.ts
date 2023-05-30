import { AxiosRequestConfig } from 'axios'

export interface IRequestConfig extends AxiosRequestConfig {
  url: string
  method: string
  params: object
  headers: object
  data: object | string
}
