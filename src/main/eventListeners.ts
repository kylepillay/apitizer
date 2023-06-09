import { IRequestData, IResponse } from './types'

export const onMakeRequest = async (event: Electron.IpcMainEvent, args: IRequestData) => {
  const myHeaders = new Headers()
  for (const pair of args.headers) {
    pair.key && myHeaders.append(pair.key, pair.value)
  }

  for (const pair of args.params) {
    if (pair.key && pair.value) {
      if (args.params.indexOf(pair) === 0) {
        args.url += `?${pair.key}=${pair.value}`
      } else {
        args.url += `&${pair.key}=${pair.value}`
      }
    }
  }

  let response = {} as IResponse
  let fetchResponse: Response

  const methodsThatAllowBody = ['POST', 'PUT', 'PATCH']
  try {
    fetchResponse = await fetch(args.url, {
      method: args.method,
      headers: myHeaders,
      ...(methodsThatAllowBody.indexOf(args.method) >= 0 && { body: JSON.parse(args.data) }),
    })
    const fetchResponseClone = fetchResponse.clone()
    const json = await fetchResponse.json()
    const text = await fetchResponseClone.text()

    const headers: {
      [key: string]: string | string[]
    } = {}
    for (const pair of fetchResponse.headers.entries()) {
      headers[pair[0]] = pair[1]
    }

    response = {
      status: fetchResponse.status,
      statusText: fetchResponse.statusText,
      ok: fetchResponse.ok,
      redirected: fetchResponse.redirected,
      type: fetchResponse.type,
      url: fetchResponse.url,
      json: JSON.stringify(json, null, 2),
      text,
      headers,
    }
  } catch (error) {
    response = {
      error,
    }
  }

  event.reply('make-request-response', response)
}
