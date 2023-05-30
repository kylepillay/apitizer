import { useMutation } from 'react-query'
import axios from 'axios'
import { IRequestConfig } from './interfaces'

const makeMutationRequest = async (requestData: IRequestConfig) => {
  const response = await axios(requestData)
  return response.data
}

export const useMakeRequest = () => useMutation(makeMutationRequest)
