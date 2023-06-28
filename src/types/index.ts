export interface KeyValuePair {
  id: number
  key: string
  value: string
}

export interface IRequestData {
  id: number
  url: string
  name: string
  method: string
  queryParams: KeyValuePair[]
  headers: KeyValuePair[]
  body: string
}

export interface IResponse {
  requestId: number
  ok?: boolean
  status?: number
  statusText?: string
  redirected?: boolean
  type?: string
  url?: string
  formData?: FormData
  body?: string
  text?: string
  headers?: object
  error?: unknown
}
