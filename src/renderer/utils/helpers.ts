import { KeyValuePair } from '../store/useApplicationData'

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

const checkAndGetBody = (newBody: object | string, currentBody: object): object | undefined => {
  const bodyObject = typeof newBody === 'string' ? JSON.parse(newBody) : newBody

  if (
    Object.keys(bodyObject).length > 0 &&
    JSON.stringify(currentBody) != JSON.stringify(bodyObject)
  ) {
    return bodyObject
  }
}

export { convertKeyValueToObject, checkAndGetBody }
