import React, { useEffect, useState } from 'react'

export default function KeyValueEditor({ keyPair, setKeyPair, onKeyPairRemove }: any) {
  const [keyValue, setKeyValue] = useState(keyPair)
  const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedKeyValue(keyValue)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [keyValue])

  useEffect(() => {
    setKeyPair(debouncedKeyValue)
    // eslint-disable-next-line
  }, [debouncedKeyValue])

  const handleOnChange = (e: any) => {
    setKeyValue((prevState: any) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <div className='mb-3 flex'>
        <input
          className='w-full rounded-md border border-gray-300 px-4 py-1.5  hover:border-sky-700 focus:outline-sky-700'
          placeholder='Key'
          name='keyItem'
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className='ml-3 w-full rounded-md border border-gray-300 px-4 py-1.5 hover:border-sky-700 focus:outline-sky-700'
          placeholder='Value'
          name='valueItem'
          onChange={(e) => handleOnChange(e)}
        />
        <button
          className='ml-4 rounded-md border border-red-300 px-4 text-red-500 hover:bg-red-100'
          onClick={() => onKeyPairRemove(keyPair)}
        >
          Remove
        </button>
      </div>
    </>
  )
}
