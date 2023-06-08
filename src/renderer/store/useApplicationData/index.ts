import { create } from 'zustand'

import { defaultKeyValuePair } from '../../constants/index'

export interface KeyValuePair {
  id?: string
  key: string
  value: string
}
export interface IApplicationDataData {
  requestInProgress: boolean
  responseBody: string
  url: string
  setUrl: (url: string) => void
  setResponseBody: (body: string) => void
  requestBody: string
  setRequestBody: (body: string) => void
  method: string
  setMethod: (method: string) => void
  queryParams: KeyValuePair[]
  setQueryParams: (params: KeyValuePair[]) => void
  headers: KeyValuePair[]
  setHeaders: (headers: KeyValuePair[]) => void
  setRequestInProgress: (requestInProgress: boolean) => void
}

export const useApplicationData = create<IApplicationDataData>()((set, get) => ({
  headers: [defaultKeyValuePair],
  queryParams: [defaultKeyValuePair],
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'GET',
  requestInProgress: false,
  responseBody: '{}',
  requestBody: '{}',

  setResponseBody: (body) => {
    set({ responseBody: body })
  },
  setRequestBody: (body) => {
    set({ requestBody: body })
  },
  setHeaders: (headers: KeyValuePair[]) => set({ headers }),
  setQueryParams: (queryParams: KeyValuePair[]) => set({ queryParams }),
  setMethod: (method: string) => set({ method }),
  setUrl: (url: string) => set({ url }),
  setRequestInProgress: (requestInProgress: boolean) => {
    set({ requestInProgress })
  },
}))
