import { render, fireEvent } from '@testing-library/react'
import KeyValueEditor from 'renderer/components/Panes/KeyValuePane/KeyValueEditor'
import { KeyValuePair } from 'types'

describe('KeyValueEditor', () => {
  const keyPair: KeyValuePair = {
    id: 1,
    key: 'testKey',
    value: 'testValue',
  }
  const onUpdateMock = jest.fn()
  const onRemoveMock = jest.fn()
  const type = 'Headers'
  const requestTabId = 123

  it('renders the correct input values', () => {
    const { getByPlaceholderText } = render(
      <KeyValueEditor
        keyPair={keyPair}
        onUpdate={onUpdateMock}
        onRemove={onRemoveMock}
        type={type}
        requestTabId={requestTabId}
      />,
    )
    const keyInput = getByPlaceholderText('Key') as HTMLInputElement
    const valueInput = getByPlaceholderText('Value') as HTMLInputElement

    expect(keyInput.value).toBe(keyPair.key)
    expect(valueInput.value).toBe(keyPair.value)
  })

  it('triggers update function on input change', () => {
    const { getByPlaceholderText } = render(
      <KeyValueEditor
        keyPair={keyPair}
        onUpdate={onUpdateMock}
        onRemove={onRemoveMock}
        type={type}
        requestTabId={requestTabId}
      />,
    )
    const keyInput = getByPlaceholderText('Key')
    const newKey = 'updatedKey'
    fireEvent.change(keyInput, { target: { name: 'key', value: newKey } })

    expect(onUpdateMock).toHaveBeenCalledTimes(1)
    expect(onUpdateMock).toHaveBeenCalledWith({ ...keyPair, key: newKey }, type, requestTabId)
  })

  it('triggers remove function on remove button click', () => {
    const { getByText } = render(
      <KeyValueEditor
        keyPair={keyPair}
        onUpdate={onUpdateMock}
        onRemove={onRemoveMock}
        type={type}
        requestTabId={requestTabId}
      />,
    )
    const removeButton = getByText('Remove')
    fireEvent.click(removeButton)

    expect(onRemoveMock).toHaveBeenCalledTimes(1)
    expect(onRemoveMock).toHaveBeenCalledWith(keyPair, type, requestTabId)
  })
})
