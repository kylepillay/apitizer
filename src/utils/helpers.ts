import { KeyValuePair } from '@store/useApplicationData'

const convertKeyValueToObject = (keyPairs: KeyValuePair[]) => {
  return [...keyPairs].reduce((data, pair) => {
    const key = pair.key
    const value = pair.value

    if (key === '') return data
    return {
      ...data,
      [key]: value,
    }
  }, {})
}

export { convertKeyValueToObject }
