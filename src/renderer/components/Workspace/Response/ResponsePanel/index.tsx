import React from 'react'

import ResponseTabGroup from 'renderer/components/Tab-Groups/ResponseTabGroup'
import { useApplicationData } from 'renderer/store/useApplicationData'
import { ThreeDots } from 'react-loader-spinner'
import { IResponse } from 'types'

export default function ResponsePanel({ response }: { response?: IResponse }) {
  const { requestInProgress } = useApplicationData()

  const RenderedResponseMeta = () => {
    return (
      <div className='mt-3 flex'>
        <span className='w-32'>
          Status:{' '}
          <span className='text-gray-500'>
            {response?.status && response?.status <= 0 ? '-' : response?.status}
          </span>
        </span>
        <span className='w-64'>
          Status Text:{' '}
          <span className='text-gray-500'>
            {response?.statusText ? response.statusText : 'No Status Text'}
          </span>
        </span>
      </div>
    )
  }

  return (
    <div className='my-4'>
      <span className='text-2xl font-medium'>Response</span>
      {requestInProgress ? (
        <ThreeDots />
      ) : (
        <>
          {response ? <RenderedResponseMeta /> : null}
          <ResponseTabGroup response={response} />
        </>
      )}
    </div>
  )
}
