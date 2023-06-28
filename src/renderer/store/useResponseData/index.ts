import { create } from 'zustand'
import { IResponse } from 'types'
import * as O from 'optics-ts'

export interface IResponseStore {
  responses: IResponse[]
  addNewResponse: (response: IResponse) => void
  getResponseByRequestId: (requestId: number) => IResponse
}

export const useResponseData = create<IResponseStore>((set, get) => ({
  responses: [],
  addNewResponse: (response: IResponse) => {
    set(O.modify(O.optic<IResponseStore>().path('responses'))((c) => [...c, response]))
  },
  getResponseByRequestId: (requestId) => {
    return (
      get().responses.find((response) => response.requestId === requestId) || {
        requestId: 0,
        status: 0,
        statusText: '',
        headers: {},
        body: '{}',
        text: '',
        ok: false,
        redirected: false,
        type: '',
        url: '',
        error: undefined,
      }
    )
  },
}))
