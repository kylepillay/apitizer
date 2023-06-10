export interface KeyValuePair {
  id: string
  key: string
  value: string
}

export interface IRequestData {
  url: string
  method: string
  params: KeyValuePair[]
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
