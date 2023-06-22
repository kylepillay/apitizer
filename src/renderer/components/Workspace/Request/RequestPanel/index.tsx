import React, { useEffect, useState } from 'react'
import UrlEditor from '../../../../components/Panes/UrlEditorPane'
import RequestTabGroup from '../../../../components/Tab-Groups/RequestTabGroup'
import { RequestTab, useApplicationData } from '../../../../store/useApplicationData'

const RequestPanel = ({ id, method, url, headers, queryParams, body }: RequestTab) => {
  const { onChangeRequestUrl, onChangeRequestMethod, getRequestData } = useApplicationData(
    (state) => state,
  )

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

  return (
    <>
      <UrlEditor
        url={url}
        setUrl={onChangeRequestUrl}
        requestId={id}
        queryParamsString={queryParamsString}
        reqMethod={method}
        setReqMethod={onChangeRequestMethod}
        onInputSend={() => {
          console.log(getRequestData(id))
          window.electron.ipcRenderer.sendMessage('make-request', getRequestData(id))
        }}
      />
      <RequestTabGroup body={body} queryParams={queryParams} headers={headers} requestTabId={id} />
    </>
  )
}

export default RequestPanel
