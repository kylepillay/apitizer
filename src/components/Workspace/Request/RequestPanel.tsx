import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { convertKeyValueToObject } from '../../../utils/helpers'
import UrlEditor from '../../Panes/RequestUrl/UrlEditor'
import RequestTabGroup from '../../Tab-Groups/RequestTabGroup'
import { useMakeRequest } from '@services/ApiService/request/queries'
import { useResponseData } from '@store/useResponseData'
import { useApplicationData } from '@store/useApplicationData'

export const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem: '',
    valueItem: '',
  },
]

export default function Request() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1')
  const [reqMethod, setReqMethod] = useState('GET')
  const [queryParams, setQueryParams] = useState<typeof keyPairInitState>(keyPairInitState)
  const [headers, setHeaders] = useState<typeof keyPairInitState>(keyPairInitState)

  const { currentJsonBody, setJsonBody } = useApplicationData(state => state)
  
  const { data: responseData, refetch } = useMakeRequest({
    method: reqMethod,
    url: url,
    params: convertKeyValueToObject(queryParams),
    headers: convertKeyValueToObject(headers),
    data: currentJsonBody,
  });

  const setResponseData = useResponseData((state) => state.setResponseData)

  useEffect(() => { 
    responseData && setResponseData(responseData)
  }, [responseData])

  const handleOnInputSend = async () => {
      refetch()
  }

  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
        onInputSend={handleOnInputSend}
      />
      <RequestTabGroup
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={currentJsonBody}
        setBody={setJsonBody}
      />
    </>
  )
}
