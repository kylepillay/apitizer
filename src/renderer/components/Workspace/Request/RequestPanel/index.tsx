import React, { useEffect, useState } from 'react'
import UrlEditor from '../../../../components/Panes/UrlEditorPane'
import RequestTabGroup from '../../../../components/Tab-Groups/RequestTabGroup'
import { useApplicationData } from '../../../../store/useApplicationData'
import { useRequestData } from 'renderer/store/useRequestData'

const RequestPanel = () => {
  const { method, url, queryParams, headers, requestBody, setUrl, setMethod } = useApplicationData(
    (state) => state,
  )

  const { getRequestData, setRequestData } = useRequestData((state) => state)
  const [queryParamsString, setQueryParamsString] = useState('')

  useEffect(() => {
    setRequestData({
      method,
      url,
      params: queryParams,
      headers,
      data: requestBody,
    })
    console.log('queryParams', queryParams)
  }, [method, url, queryParams, headers, requestBody])

  useEffect(() => {
    let newQueryParamsString = ''
    for (const pair of queryParams) {
      if (pair.key) {
        if (queryParams.indexOf(pair) === 0) {
          newQueryParamsString += `?${pair.key}=${pair.value}`
        } else {
          newQueryParamsString += `&${pair.key}=${pair.value}`
        }
      }
    }
    setQueryParamsString(newQueryParamsString)
  }, [queryParams, setQueryParamsString])

  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        queryParamsString={queryParamsString}
        reqMethod={method}
        setReqMethod={setMethod}
        onInputSend={() => {
          window.electron.ipcRenderer.sendMessage('make-request', getRequestData())
        }}
      />
      <RequestTabGroup />
    </>
  )
}

export default RequestPanel
