import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import * as O from 'optics-ts'
import { IResponse } from 'types'
import { getEmptyRequestTabObject } from 'renderer/constants'

export interface KeyValuePair {
  id: number
  key: string
  value: string
}

export interface RequestTab {
  id: number
  name: string
  method: string
  url: string
  body: string
  headers: KeyValuePair[]
  queryParams: KeyValuePair[]
  response?: IResponse
}

export interface IApplicationDataData {
  requestInProgress: boolean
  requestTabs: RequestTab[]
  addNewRequest: () => void
  removeRequestTab: (requestTabId: number) => void
  setRequestInProgress: (requestInProgress: boolean) => void
  onAddKeyPair: (
    keyValuePair: KeyValuePair,
    type: 'Headers' | 'QueryParams',
    requestTabId: number,
  ) => void
  onRemoveKeyPair: (
    keyValuePair: KeyValuePair,
    type: 'Headers' | 'QueryParams',
    requestTabId: number,
  ) => void
  onUpdateKeyPair: (
    keyValuePair: KeyValuePair,
    type: 'Headers' | 'QueryParams',
    requestTabId: number,
  ) => void
  onChangeRequestBody: (body: string, requestTabId: number) => void
  onChangeRequestUrl: (url: string, requestTabId: number) => void
  onChangeRequestMethod: (method: string, requestTabId: number) => void
  onChangeRequestName: (name: string, requestTabId: number) => void
  onChangeRequestTab: (requestTabId: number) => void
  onChangeResponse: (response: IResponse) => void
  getRequestData: (requestTabId: number) => RequestTab
}

export const useApplicationData = create<IApplicationDataData>()(
  devtools((set, get) => ({
    requestTabs: [getEmptyRequestTabObject()],
    requestInProgress: false,
    addNewRequest: () => {
      set(
        O.modify(O.optic<IApplicationDataData>().path('requestTabs'))((c) => [
          ...c,
          getEmptyRequestTabObject(),
        ]),
      )
    },
    removeRequestTab: (requestTabId) => {
      const requestTab = O.optic<IApplicationDataData>()
        .path('requestTabs')
        .filter((requestTab) => requestTab.id === requestTabId)
      set(O.set(requestTab)([]))
    },
    onAddKeyPair: (keyValuePair, type, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path(type === 'Headers' ? 'headers' : 'queryParams'),
        )((c) => [...c, keyValuePair]),
      )
    },
    onRemoveKeyPair: (keyValuePair, type, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path(type === 'Headers' ? 'headers' : 'queryParams'),
        )((c) => c.filter((item) => item.id !== keyValuePair.id)),
      )
    },
    onUpdateKeyPair: (keyValuePair, type, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path(type === 'Headers' ? 'headers' : 'queryParams')
            .find((item) => item.id === keyValuePair.id),
        )(() => keyValuePair),
      )
    },
    onChangeRequestBody: (body, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path('body'),
        )(() => body),
      )
    },
    onChangeRequestUrl: (url, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path('url'),
        )(() => url),
      )
    },
    onChangeRequestMethod: (method, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path('method'),
        )(() => method),
      )
    },
    onChangeRequestName: (name, requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId)
            .path('name'),
        )(() => name),
      )
    },
    onChangeRequestTab: (requestTabId) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === requestTabId),
        )((c) => c),
      )
    },
    onChangeResponse: (response) => {
      set(
        O.modify(
          O.optic<IApplicationDataData>()
            .path('requestTabs')
            .find((requestTab) => requestTab.id === response.requestId)
            .path('response'),
        )(() => response),
      )
    },
    getRequestData: (requestTabId) => {
      return (
        get().requestTabs.find((requestTab) => requestTab.id === requestTabId) || {
          id: 1000 + Math.floor(Math.random() * 1000),
          name: 'New Request',
          url: 'https://jsonplaceholder.typicode.com/todos/1',
          method: 'GET',
          body: '',
          headers: [],
          queryParams: [],
        }
      )
    },
    setRequestInProgress: (requestInProgress: boolean) => {
      set({ requestInProgress })
    },
  })),
)
