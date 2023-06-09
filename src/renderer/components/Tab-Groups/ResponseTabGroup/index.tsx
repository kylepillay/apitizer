import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { ThreeDots } from 'react-loader-spinner'

import ResponseHeaderPane from '../../../components/Panes/ResponseHeaderPane'
import CodeEditor from '../../../components/General/CodeEditor'
import { useApplicationData } from '../../../store/useApplicationData'
import { IResponse } from 'types'

const ResponseTabGroup = ({ response }: { response?: IResponse }) => {
  const refreshInProgress = useApplicationData((state) => state.requestInProgress)
  const { body, headers } = response ? response : { body: null, headers: [] }

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
        {refreshInProgress ? <ThreeDots /> : <CodeEditor value={body ? body : '{}'} readOnly />}
      </Tabs.Content>
      <Tabs.Content value='response-headers' className='tab-content'>
        {refreshInProgress ? null : <ResponseHeaderPane headers={headers} />}
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default ResponseTabGroup
