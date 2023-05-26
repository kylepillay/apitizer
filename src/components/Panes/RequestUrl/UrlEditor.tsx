import React from 'react'

const requestMethods = [
  {
    slug: 'get',
    method: 'GET',
  },
  {
    slug: 'post',
    method: 'POST',
  },
  {
    slug: 'put',
    method: 'PUT',
  },
  {
    slug: 'patch',
    method: 'PATCH',
  },
  {
    slug: 'delete',
    method: 'DELETE',
  },
]

export default function UrlEditor({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
}: {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  reqMethod: string
  setReqMethod: React.Dispatch<React.SetStateAction<string>>
  onInputSend: (e: any) => void
}) {
  return (
    <>
      <form className='flex'>
        <select
          className='rounded-md border border-gray-300 bg-gray-100 px-4 py-2 hover:border-sky-700 focus:outline-none'
          value={reqMethod}
          onChange={(e) => setReqMethod(e.target.value)}
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
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className='ml-3 rounded-md bg-sky-700 px-6 py-2 font-semibold text-white hover:bg-sky-800'
          type='button'
          onClick={(e) => onInputSend(e)}
        >
          Send
        </button>
      </form>
    </>
  )
}
