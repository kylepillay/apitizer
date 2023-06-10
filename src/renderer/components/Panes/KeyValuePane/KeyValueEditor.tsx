import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import { KeyValuePair } from 'main/types'

const KeyValueEditor = ({
  keyPair,
  setKeyPair,
  onKeyPairRemove,
}: {
  keyPair: KeyValuePair
  setKeyPair: (keyPair: KeyValuePair) => void
  onKeyPairRemove: (keyPair: KeyValuePair) => void
}) => {
  const [keyValue, setKeyValue] = useState<KeyValuePair>(keyPair)

  useEffect(() => {
    debouncedInput(keyValue)
  }, [keyValue])

  const debouncedInput = useCallback(
    _.debounce((keyValue) => {
      setKeyPair(keyValue)
    }, 300),
    [setKeyPair],
  )

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyValue((prevState: KeyValuePair) => ({
        ...prevState,
        id: prevState.id,
        key: e?.target?.name === 'key' ? e?.target?.value : prevState?.key,
        value: e?.target?.name === 'value' ? e?.target?.value : prevState?.value,
      }))
    },
    [setKeyValue],
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
          name='key'
          onChange={handleOnChange}
        />
        <input
          className='ml-3 w-full rounded-md border border-gray-300 px-4 py-1.5 hover:border-sky-700 focus:outline-sky-700'
          placeholder='Value'
          name='value'
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
