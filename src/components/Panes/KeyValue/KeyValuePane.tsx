import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import KeyValueEditor from './KeyValueEditor'

export default function KeyValuePane({ value, onChange }: any) {
  const onKeyPairAdd = () => {
    onChange((value: any) => [
      ...value,
      {
        id: uuidv4(),
        keyItem: value.keyItem,
        valueItem: value.valueItem,
      },
    ])
  }

  const onKeyPairRemove = (keyPair: any) => {
    let newKeyValues = [...value]
    newKeyValues = newKeyValues.filter((x) => x.id !== keyPair.id)
    onChange(newKeyValues)
  }

  const onKeyPairUpdate = (keyPair: any) => {
    const elementIndex = value.findIndex((element: any) => element.id === keyPair.id)
    const newKeyValues = [...value]
    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex],
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem,
    }
    onChange(newKeyValues)
  }

  const renderedList = value.map((keyPair: any) => {
    return (
      <KeyValueEditor
        key={keyPair.id}
        keyPair={keyPair}
        setKeyPair={(keyPairValue: any) => onKeyPairUpdate(keyPairValue)}
        onKeyPairRemove={() => onKeyPairRemove(keyPair)}
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
