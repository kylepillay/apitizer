import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface IAxiosInstance extends AxiosInstance {
  data?: {
    [key: string]: object | string
  }
}
export class ApiService {
  config: AxiosRequestConfig = {}
  client: IAxiosInstance = axios.create({})

  private cancellationToken = axios.CancelToken.source()

  static createInstance(config?: AxiosRequestConfig): ApiService {
    const activeInstance = new ApiService()
    activeInstance.cancellationToken = axios.CancelToken.source()
    activeInstance.config = config || {}
    activeInstance.config.cancelToken = activeInstance.cancellationToken.token
    return activeInstance
  }

  cancelRequests() {
    this.cancellationToken.cancel('RequestCancellation')
    return ApiService.createInstance({ ...this.config, cancelToken: this.cancellationToken.token })
  }
}
