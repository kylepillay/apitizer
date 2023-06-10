import React from 'react'

import ResponseTabGroup from '../../../Tab-Groups/ResponseTabGroup'
import { useResponseData } from '../../../../store/useResponseData'

export default function ResponsePanel() {
  const responseData = useResponseData((state) => state)

  const RenderedResponseMeta = () => {
    return (
      <div className='mt-3 flex'>
        <span className='w-32'>
          Status:{' '}
          <span className='text-gray-500'>
            {responseData?.status && responseData?.status <= 0 ? '-' : responseData.status}
          </span>
        </span>
        <span className='w-64'>
          Status Text:{' '}
          <span className='text-gray-500'>
            {responseData.statusText ? responseData.statusText : 'No Status Text'}
          </span>
        </span>
      </div>
    )
  }

  return (
    <div className='my-4'>
      <span className='text-2xl font-medium'>Response</span>
      {responseData ? <RenderedResponseMeta /> : null}
      <ResponseTabGroup />
    </div>
  )
}
