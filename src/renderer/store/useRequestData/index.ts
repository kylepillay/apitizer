import { create } from 'zustand'
import { KeyValuePair } from '../../store/useApplicationData'
import { convertKeyValueToObject } from '../../utils/helpers'

export interface IUnformattedRequest {
  method: string
  url: string
  data: object | string
  headers: KeyValuePair[]
  params: KeyValuePair[]
}

export const useRequestData = create((set, get: any) => ({
  url: '',
  method: '',
  params: {},
  headers: {},
  data: {},

  setRequestData: (data: any) => {
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
