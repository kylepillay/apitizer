import { create } from 'zustand'
import { IRequestConfig } from '@services/ApiService/request/interfaces'
import { KeyValuePair } from '@store/useApplicationData'
import { convertKeyValueToObject } from '@utils/helpers'

export interface IUnformattedRequest {
  method: string
  url: string
  data: object | string
  headers: KeyValuePair[]
  params: KeyValuePair[]
}

export interface IRequestDataSlice extends IRequestConfig {
  setRequestData: (data: IUnformattedRequest) => void
  getRequestData: () => IRequestConfig
}

export const useRequestData = create<IRequestDataSlice>((set, get) => ({
  url: '',
  method: '',
  params: {},
  headers: {},
  data: {},

  setRequestData: (data) => {
    set({
      url: data.url,
      method: data.method,
      params: convertKeyValueToObject(data.params),
      headers: convertKeyValueToObject(data.headers),
      data: data.data,
    })
  },

  getRequestData: () => {
    return {
      url: get().url,
      method: get().method,
      params: get().params,
      headers: get().headers,
      data: get().data,
    }
  },
}))
