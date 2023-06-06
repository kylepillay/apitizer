import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'

export interface KeyValue {
  key: string
  [value: string]: string
}
const KeyValueEditor = ({
  keyPair,
  setKeyPair,
  onKeyPairRemove,
}: {
  keyPair: KeyValue
  setKeyPair: (keyPair: KeyValue) => void
  onKeyPairRemove: (keyPair: KeyValue) => void
}) => {
  const [keyValue, setKeyValue] = useState<KeyValue>(keyPair)

  useEffect(() => {
    _.debounce<(keyPair: KeyValue) => void>(setKeyPair, 500, {
      leading: true,
    })
  }, [keyValue])

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyValue((prevState: KeyValue) => ({
        ...prevState,
        id: keyValue.id,
        [e?.target?.name]: e?.target?.value,
      }))
    },
    [setKeyValue, keyValue],
  )

  const onKeyPairRemoveClick = useCallback(() => {
    onKeyPairRemove(keyValue)
  }, [onKeyPairRemove, keyValue])

  return (
    <>
      <div className='mb-3 flex'>
        <input
          className='w-full rounded-md border border-gray-300 px-4 py-1.5  hover:border-sky-700 focus:outline-sky-700'
          placeholder='Key'
          name='keyItem'
          onChange={handleOnChange}
        />
        <input
          className='ml-3 w-full rounded-md border border-gray-300 px-4 py-1.5 hover:border-sky-700 focus:outline-sky-700'
          placeholder='Value'
          name='valueItem'
          onChange={handleOnChange}
        />
        <button
          className='ml-4 rounded-md border border-red-300 px-4 text-red-500 hover:bg-red-100'
          onClick={onKeyPairRemoveClick}
        >
          Remove
        </button>
      </div>
    </>
  )
}

export default KeyValueEditor
