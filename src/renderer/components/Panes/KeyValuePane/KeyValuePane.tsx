import React, { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import KeyValueEditor from './KeyValueEditor'
import { KeyValuePair } from '../../../store/useApplicationData'

export default function KeyValuePane({
  keyPairValueList,
  onChange,
}: {
  keyPairValueList: KeyValuePair[]
  onChange: (keyPairValueList: KeyValuePair[]) => void
}) {
  const onKeyPairAdd = useCallback(() => {
    onChange([
      ...keyPairValueList,
      {
        id: uuidv4(),
        key: '',
        value: '',
      },
    ])
  }, [onChange])

  const onKeyPairRemove = (keyPair: KeyValuePair) => {
    let newKeyValues = [...keyPairValueList]

    newKeyValues = newKeyValues.filter((x) => x.id !== keyPair.id)
    onChange(newKeyValues)
  }

  const onKeyPairUpdate = (keyValue: KeyValuePair) => {
    const elementIndex = keyPairValueList.findIndex(
      (element: KeyValuePair) => element.id === keyValue.id,
    )
    const newKeyValues = [...keyPairValueList]
    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex],
      key: keyValue.key,
      value: keyValue.value,
    }
    onChange(newKeyValues)
  }

  const renderedList = keyPairValueList.map((keyValuePair: KeyValuePair) => {
    return (
      <KeyValueEditor
        key={keyValuePair.id}
        keyPair={{ id: keyValuePair.id, key: keyValuePair.key, value: keyValuePair.value }}
        setKeyPair={(keyPairValue) => onKeyPairUpdate(keyPairValue)}
        onKeyPairRemove={() => onKeyPairRemove(keyValuePair)}
      />
    )
  })

  return (
    <>
      <div>
        {renderedList}
        <button
          className='rounded-md border border-sky-600 px-6 py-1 text-sky-800 hover:bg-sky-200'
          onClick={onKeyPairAdd}
        >
          Add
        </button>
      </div>
    </>
  )
}
