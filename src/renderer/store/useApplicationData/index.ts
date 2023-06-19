import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import * as O from 'optics-ts'

import { getDefaultKeyValuePair } from '../../constants/index'

export interface KeyValuePair {
  id: string
  key: string
  value: string
}

export interface RequestTab {
  id: string
  name: string
}

export interface IApplicationDataData {
  requestInProgress: boolean
  responseBody: string
  url: string
  requestTabs: RequestTab[]
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
  addNewRequest: () => void
}

export const useApplicationData = create<IApplicationDataData>()(
  devtools((set, get) => ({
    headers: [getDefaultKeyValuePair()],
    queryParams: [getDefaultKeyValuePair()],
    requestTabs: [{ id: uuidv4(), name: 'New Request' }],

    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
    requestInProgress: false,
    responseBody: '{}',
    requestBody: '{}',

    addNewRequest: () => {
      set(
        O.modify(O.optic<IApplicationDataData>().path('requestTabs'))((c) => [
          ...c,
          { id: uuidv4(), name: 'New Request' },
        ]),
      )
    },
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
  })),
)
