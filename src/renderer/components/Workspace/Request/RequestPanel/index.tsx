import React from 'react'
import UrlEditor from '../../../../components/Panes/UrlEditorPane'
import RequestTabGroup from '../../../../components/Tab-Groups/RequestTabGroup'
import { useApplicationData } from '../../../../store/useApplicationData'
import { useResponseData } from '../../../../store/useResponseData'

const RequestPanel = () => {
  const {
    method,
    url,
    queryParams,
    headers,
    requestBody,
    setUrl,
    responseBody,
    setMethod,
    setResponseBody,
    setRequestInProgress,
  } = useApplicationData((state) => state)

  const { setResponseData } = useResponseData((state) => state)

  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={method}
        setReqMethod={setMethod}
        onInputSend={() => {
          window.electron.ipcRenderer.sendMessage('make-request', {
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            method: 'GET',
            params: {},
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              'name': 'Kyle'
            }
          });
        }}
      />
      <RequestTabGroup />
    </>
  )
}

export default RequestPanel
