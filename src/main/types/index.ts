export interface KeyValuePair {
  id: number
  key: string
  value: string
}

export interface IRequestData {
  url: string
  method: string
  queryParams: KeyValuePair[]
  headers: KeyValuePair[]
  data: string
}

export interface IResponse {
  ok?: boolean
  status?: number
  statusText?: string
  redirected?: boolean
  type?: string
  url?: string
  formData?: FormData
  json?: string
  text?: string
  headers?: object
  error?: unknown
}
