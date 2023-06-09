import React, { useCallback } from 'react'

import { requestMethods } from '../../../constants/index'
export default function UrlEditor({
  url,
  queryParamsString = '',
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
  requestId,
}: {
  url: string
  queryParamsString: string
  setUrl: (url: string, requestTabId: number) => void
  reqMethod: string
  setReqMethod: (method: string, requestTabId: number) => void
  onInputSend: (e: React.MouseEvent<HTMLButtonElement>) => void
  requestId: number
}) {
  const onRequestMethodChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setReqMethod(e.target.value, requestId)
    },
    [setReqMethod],
  )

  const onUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value, requestId)
    },
    [setUrl],
  )

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onInputSend(e)
    },
    [onInputSend],
  )

  return (
    <>
      <form className='flex'>
        <select
          className='rounded-md border border-gray-300 bg-gray-100 px-4 py-2 hover:border-sky-700 focus:outline-none'
          value={reqMethod}
          onChange={onRequestMethodChange}
        >
          {requestMethods.map((option) => (
            <option key={option.slug} value={option.method}>
              {option.method}
            </option>
          ))}
        </select>
        <input
          className='ml-3 w-full rounded-md border border-gray-300 px-4 py-2 hover:border-sky-700 focus:outline-sky-700'
          value={url}
          onChange={onUrlChange}
        />
        <button
          className='ml-3 rounded-md bg-sky-700 px-6 py-2 font-semibold text-white hover:bg-sky-800'
          type='button'
          onClick={onSubmit}
        >
          Send
        </button>
      </form>
    </>
  )
}
