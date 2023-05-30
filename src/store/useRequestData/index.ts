import { create } from 'zustand'
import { IRequestConfig } from '@services/ApiService/request/interfaces'
import { convertKeyValueToObject } from '@utils/helpers'

export interface IRequestDataSlice extends IRequestConfig {
  setRequestData: (data: IRequestConfig) => void
  getRequestData: () => IRequestConfig
}

export const useRequestData = create<IRequestDataSlice>((set, get) => ({
  url: '',
  method: '',
  params: [],
  headers: [],
  data: {},

  setRequestData: (data: IRequestConfig) => {
    set(data)
  },
  getRequestData: () => {
    return {
      url: get().url,
      method: get().method,
      params: convertKeyValueToObject(get().params),
      headers: convertKeyValueToObject(get().headers),
      data: get().data,
    }
  },
}))
