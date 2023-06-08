import { create } from 'zustand'
import { KeyValuePair } from '../../store/useApplicationData'

export interface IUnformattedRequest {
  method: string
  url: string
  data: object | string
  headers: KeyValuePair[]
  params: KeyValuePair[]
}

export interface IUseRequestData extends IUnformattedRequest {
  setRequestData: (data: IUnformattedRequest) => void
  getRequestData: () => IUnformattedRequest
}

export const useRequestData = create<IUseRequestData>((set, get) => ({
  url: '',
  method: '',
  params: [],
  headers: [],
  data: {},

  setRequestData: (data: IUnformattedRequest) => {
    set({
      url: data.url,
      method: data.method,
      params: data.params,
      headers: data.headers,
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
