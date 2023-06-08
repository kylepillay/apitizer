import { create } from 'zustand'
import { IResponse } from 'main/types'

export interface IResponseDataSlice {
  ok: boolean
  status: number
  statusText: string
  redirected: boolean
  type: string
  url: string
  json: string
  text: string
  headers: object
  error: unknown
  setResponseData: (response: IResponse) => void
  getResponseData: () => IResponse
}

export const useResponseData = create<IResponseDataSlice>((set, get) => ({
  status: 0,
  statusText: '',
  headers: {},
  json: '{}',
  text: '',
  ok: false,
  redirected: false,
  type: '',
  url: '',
  error: undefined,

  setResponseData: (response: IResponse) => {
    response.error
      ? set({ error: response.error })
      : set({
          json: response.json,
          text: response.text,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          ok: response.ok,
          redirected: response.redirected,
          type: response.type,
          url: response.url,
        })
  },
  getResponseData: () => {
    return {
      json: get().json,
      text: get().text,
      status: get().status,
      statusText: get().statusText,
      headers: get().headers,
      ok: get().ok,
      redirected: get().redirected,
      type: get().type,
      url: get().url,
    }
  },
}))
