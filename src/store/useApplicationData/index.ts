import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { defaultKeyValuePair } from '@constants/index'
import { checkAndGetBody } from '@utils/helpers'
export interface KeyValuePair {
  id?: string
  key: string
  value: string
}
export interface IApplicationDataData {
  requestInProgress: boolean
  responseBody: object
  url: string
  setUrl: (url: string) => void
  setResponseBody: (body: object | string) => void
  requestBody: object
  setRequestBody: (body: object) => void
  method: string
  setMethod: (method: string) => void
  queryParams: KeyValuePair[]
  setQueryParams: (params: KeyValuePair[]) => void
  headers: KeyValuePair[]
  setHeaders: (headers: KeyValuePair[]) => void
}

export const useApplicationData = create<IApplicationDataData>()(
  persist(
    (set, get) => ({
      headers: [defaultKeyValuePair],
      queryParams: [defaultKeyValuePair],
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET',
      requestInProgress: false,
      responseBody: {},
      requestBody: {},

      setResponseBody: (body) => {
        const checkedBody = checkAndGetBody(body, get().responseBody)
        if (checkedBody) {
          set({ responseBody: checkedBody })
        }
      },
      setRequestBody: (body) => {
        const checkedBody = checkAndGetBody(body, get().requestBody)
        if (checkedBody) {
          set({ responseBody: checkedBody })
        }
      },
      setHeaders: (headers: KeyValuePair[]) => set({ headers }),
      setQueryParams: (queryParams: KeyValuePair[]) => set({ queryParams }),
      setMethod: (method: string) => set({ method }),
      setUrl: (url: string) => set({ url }),
    }),
    {
      name: 'apitizer-application-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
