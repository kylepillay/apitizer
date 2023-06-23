import React, { useEffect, useState, useCallback } from 'react'
import UrlEditor from 'renderer/components/Panes/UrlEditorPane'
import RequestTabGroup from 'renderer/components/Tab-Groups/RequestTabGroup'
import { RequestTab, useApplicationData } from 'renderer/store/useApplicationData'

const RequestPanel = ({ id, method, url, headers, queryParams, body }: RequestTab) => {
  const { onChangeRequestUrl, onChangeRequestMethod, getRequestData, setRequestInProgress } =
    useApplicationData((state) => state)

  const [queryParamsString, setQueryParamsString] = useState('')

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

  const onSubmit = useCallback(() => {
    window.electron.ipcRenderer.sendMessage('make-request', getRequestData(id))
    setRequestInProgress(true)
  }, [window.electron.ipcRenderer.sendMessage])

  return (
    <>
      <UrlEditor
        url={url}
        setUrl={onChangeRequestUrl}
        requestId={id}
        queryParamsString={queryParamsString}
        reqMethod={method}
        setReqMethod={onChangeRequestMethod}
        onInputSend={onSubmit}
      />
      <RequestTabGroup body={body} queryParams={queryParams} headers={headers} requestTabId={id} />
    </>
  )
}

export default RequestPanel
