import { create } from 'zustand'
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface IResponseDataSlice extends AxiosResponse {
  setResponseData: (data: AxiosResponse) => void
  getResponseData: () => AxiosResponse<unknown, unknown> | undefined
}

export const useResponseData = create<IResponseDataSlice>((set, get) => ({
  data: {},
  status: 0,
  statusText: '',
  headers: {},
  config: {} as InternalAxiosRequestConfig,
  request: {},

  setResponseData: (response: AxiosResponse<unknown, unknown> | undefined) => {
    set({
      data: response?.data,
      status: response?.status,
      statusText: response?.statusText,
      headers: response?.headers,
      config: response?.config,
    })
  },
  getResponseData: () => {
    return {
      data: get().data,
      status: get().status,
      statusText: get().statusText,
      headers: get().headers,
      config: get().config,
      request: get().request,
    }
  },
}))
