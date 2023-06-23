import { URL } from 'url'
import path from 'path'
import { KeyValuePair } from '../types'

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212
    const url = new URL(`http://localhost:${port}`)
    url.pathname = htmlFileName
    return url.href
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`
}

export const convertKeyValueToObject = (keyPairs: KeyValuePair[]) => {
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
