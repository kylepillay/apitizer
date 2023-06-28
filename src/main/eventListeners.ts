import { Header } from './database/entity/Header'
import { QueryParam } from './database/entity/QueryParam'
import { RequestItem } from './database/entity/RequestItem'
import { IRequestData, IResponse } from '../types'
import Database from './database'

export const onMakeRequest = async (event: Electron.IpcMainEvent, args: IRequestData) => {
  const myHeaders = new Headers()
  for (const pair of args.headers) {
    pair.key && myHeaders.append(pair.key, pair.value)
  }
  for (const pair of args.queryParams) {
    if (pair.key && pair.value) {
      if (args.queryParams.indexOf(pair) === 0) {
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
      ...(methodsThatAllowBody.indexOf(args.method) >= 0 && { body: JSON.parse(args.body) }),
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
      requestId: args.id,
      status: fetchResponse.status,
      statusText: fetchResponse.statusText,
      ok: fetchResponse.ok,
      redirected: fetchResponse.redirected,
      type: fetchResponse.type,
      url: fetchResponse.url,
      body: JSON.stringify(json, null, 2),
      text,
      headers,
    }
  } catch (error) {
    response = {
      requestId: args.id,
      error,
    }
  }

  event.reply('make-request-response', response)
}

export const onAddNewRequest = async (event: Electron.IpcMainEvent, args: RequestItem) => {
  try {
    const database = new Database()
    await database.init()

    const request = new RequestItem()
    request.url = args.url
    request.method = args.method
    request.body = args.body
    request.name = args.name
    request.queryParams = args.queryParams
    request.headers = args.headers

    const result = await database.insert(request)

    event.reply('add-new-request-response', result)
  } catch (error) {
    console.warn(error)
  }
}

export const onGetAllRequests = async (event: Electron.IpcMainEvent, args: Request) => {
  const database = new Database()
  await database.init()

  const result = await database.getAll(Request)

  event.reply('get-all-requests-response', result)
}
