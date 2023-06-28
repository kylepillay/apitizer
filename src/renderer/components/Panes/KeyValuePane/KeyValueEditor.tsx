import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import { KeyValuePair } from '../../../store/useApplicationData'

const KeyValueEditor = ({
  keyPair,
  onUpdate,
  onRemove,
  type,
  requestTabId,
}: {
  keyPair: KeyValuePair
  onUpdate: (
    KeyValuePair: KeyValuePair,
    type: 'Headers' | 'QueryParams',
    requestTabId: number,
  ) => void
  onRemove: (
    KeyValuePair: KeyValuePair,
    type: 'Headers' | 'QueryParams',
    requestTabId: number,
  ) => void
  type: 'Headers' | 'QueryParams'
  requestTabId: number
}) => {
  const [keyValue, setKeyPairValue] = useState<KeyValuePair>(keyPair)

  useEffect(() => {
    debouncedInput(keyValue)
  }, [keyValue])

  const debouncedInput = useCallback(
    _.debounce((keyValue) => {
      setKeyPairValue(keyValue)
      onUpdate(keyValue, type, requestTabId)
    }, 200),
    [setKeyPairValue],
  )

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyPairValue((prevState: KeyValuePair) => ({
        ...prevState,
        id: prevState.id,
        key: e?.target?.name === 'key' ? e?.target?.value : prevState?.key,
        value: e?.target?.name === 'value' ? e?.target?.value : prevState?.value,
      }))
    },
    [setKeyPairValue],
  )

  const onKeyPairRemoveClick = useCallback(() => {
    onRemove(keyValue, type, requestTabId)
  }, [onRemove, keyValue])

  return (
    <>
      <div className='mb-3 flex'>
        <input
          className='w-full rounded-md border border-gray-300 px-4 py-1.5  hover:border-sky-700 focus:outline-sky-700'
          placeholder='Key'
          name='key'
          value={keyValue.key}
          onChange={handleOnChange}
        />
        <input
          className='ml-3 w-full rounded-md border border-gray-300 px-4 py-1.5 hover:border-sky-700 focus:outline-sky-700'
          placeholder='Value'
          name='value'
          value={keyValue.value}
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
