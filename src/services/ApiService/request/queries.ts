import { useQuery } from 'react-query'
import { IRequestConfig } from './interfaces'
import { AxiosResponse } from 'axios'
import { ApiService } from '..'

const apiService = ApiService.createInstance({
  baseURL: process.env.CORS_PROXY_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const makeQueryApiCall = async (requestData: IRequestConfig): Promise<AxiosResponse> => {
  const response = await apiService.client(requestData)
  console.log(response)
  return response
}

export const useMakeRequest = (requestData: IRequestConfig) => {
  return useQuery<AxiosResponse, Error>(
    ['data', requestData],
    () => makeQueryApiCall(requestData),
    {
      keepPreviousData: true,
      enabled: false,
    },
  )
}
