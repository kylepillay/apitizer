import React, { useCallback } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { ThreeDots } from 'react-loader-spinner'

import ResponseHeaderPane from '../../../components/Panes/ResponseHeaderPane'
import CodeEditor from '../../../components/General/CodeEditor'
import { AxiosResponse } from 'axios'
import { useApplicationData } from '../../../store/useApplicationData'

const ResponseTabGroup = ({
  response,
}: {
  response: AxiosResponse<unknown, unknown> | undefined
}) => {
  const refreshInProgress = useApplicationData((state) => state.requestInProgress)
  const { responseBody, setResponseBody } = useApplicationData((state) => state)

  const onCodeChange = useCallback((json: string) => {
    setResponseBody(json)
  }, [])

  return (
    <Tabs.Root defaultValue='response-body'>
      <Tabs.List className='tab-list'>
        <Tabs.Trigger className='tab-trigger' value='response-body'>
          Response Body
        </Tabs.Trigger>
        <Tabs.Trigger className='tab-trigger' value='response-headers'>
          Response Headers
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value='response-body' className='tab-content'>
        {refreshInProgress ? (
          <ThreeDots />
        ) : (
          <CodeEditor value={responseBody} onChange={onCodeChange} />
        )}
      </Tabs.Content>
      <Tabs.Content value='response-headers' className='tab-content'>
        {refreshInProgress ? null : <ResponseHeaderPane response={response} />}
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default ResponseTabGroup
