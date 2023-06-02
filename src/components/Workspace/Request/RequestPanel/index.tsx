import React, { useEffect } from 'react'
import UrlEditor from '@components/Panes/UrlEditorPane'
import RequestTabGroup from '@components/Tab-Groups/RequestTabGroup'
import { useMakeRequest } from '@services/ApiService/request/queries'
import { useApplicationData } from '@store/useApplicationData'
import { useRequestData } from '@store/useRequestData'

const RequestPanel = () => {
  const { method, url, queryParams, headers, jsonBody, setUrl, setJsonResponse, setMethod } =
    useApplicationData((state) => state)

  const { setRequestData, getRequestData } = useRequestData((state) => state)

  const { data: responseData, refetch } = useMakeRequest(getRequestData())

  useEffect(() => {
    setRequestData({ method, url, params: queryParams, headers, data: jsonBody })
  }, [method, url, queryParams, headers, jsonBody])

  useEffect(() => {
    responseData && setJsonResponse(responseData.data)
  }, [responseData])

  const handleOnInputSend = async () => {
    refetch()
  }

  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={method}
        setReqMethod={setMethod}
        onInputSend={handleOnInputSend}
      />
      <RequestTabGroup />
    </>
  )
}

export default RequestPanel
