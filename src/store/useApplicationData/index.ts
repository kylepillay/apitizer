import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { defaultKeyValuePair } from '@constants/index'
export interface KeyValuePair {
  id?: string
  key: string
  value: string
}
export interface IApplicationDataData {
  requestInProgress: boolean
  jsonResponse: object
  url: string
  setUrl: (url: string) => void
  setJsonResponse: (json: object) => void
  jsonBody: object
  setJsonBody: (json: object) => void
  method: string
  setMethod: (method: string) => void
  queryParams: KeyValuePair[]
  setQueryParams: (params: KeyValuePair[]) => void
  headers: KeyValuePair[]
  setHeaders: (headers: KeyValuePair[]) => void
}

export const useApplicationData = create<IApplicationDataData>()(
  persist(
    (set) => ({
      headers: [defaultKeyValuePair],
      queryParams: [defaultKeyValuePair],
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET',
      requestInProgress: false,
      jsonResponse: {},
      jsonBody: {},

      setJsonResponse: (jsonResponse) => set({ jsonResponse }),
      setJsonBody: (jsonResponse) => set({ jsonResponse }),
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
