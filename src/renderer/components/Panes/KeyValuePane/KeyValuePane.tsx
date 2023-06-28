import React from 'react'
import KeyValueEditor from './KeyValueEditor'
import { KeyValuePair } from 'renderer/store/useApplicationData'

interface KeyValuePairProps {
  keyPairValueList: KeyValuePair[]
  onAdd: (keyValuePair: KeyValuePair, type: 'Headers' | 'QueryParams', requestTabId: number) => void
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
}

const KeyValuePane: React.FC<KeyValuePairProps> = ({
  keyPairValueList,
  onAdd,
  onUpdate,
  onRemove,
  type,
  requestTabId,
}) => {
  const renderedList = keyPairValueList.map((keyValuePair: KeyValuePair) => {
    return (
      <KeyValueEditor
        type={type}
        requestTabId={requestTabId}
        key={keyValuePair.id}
        keyPair={keyValuePair}
        onUpdate={(keyValuePair) => onUpdate(keyValuePair, type, requestTabId)}
        onRemove={(keyValuePair) => onRemove(keyValuePair, type, requestTabId)}
      />
    )
  })

  return (
    <div>
      {renderedList}
      <button
        className='rounded-md border border-sky-600 px-6 py-1 text-sky-800 hover:bg-sky-200'
        onClick={() =>
          onAdd(
            { id: 1000 + Math.round(Math.random() * 1000), key: '', value: '' },
            type,
            requestTabId,
          )
        }
      >
        Add
      </button>
    </div>
  )
}

export default KeyValuePane
