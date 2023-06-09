import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import styled from '@emotion/styled'

import '../tab-groups.scss'

const StyledTabTrigger = styled(Tabs.Trigger)``

import KeyValuePane from '../../../components/Panes/KeyValuePane/KeyValuePane'
import JsonEditorPane from '../../../components/Panes/JsonEditorPane'
import { useApplicationData } from '../../../store/useApplicationData'
import { KeyValuePair } from 'types'

const RequestTabGroup = ({
  queryParams,
  headers,
  body,
  requestTabId,
}: {
  queryParams: KeyValuePair[]
  headers: KeyValuePair[]
  body: string
  requestTabId: number
}) => {
  const { onAddKeyPair, onRemoveKeyPair, onUpdateKeyPair, onChangeRequestBody } =
    useApplicationData((state) => state)

  return (
    <Tabs.Root defaultValue='query-params'>
      <Tabs.List className='tab-list' aria-label='request-tabs'>
        <StyledTabTrigger className='tab-trigger' value='query-params'>
          Query Params
        </StyledTabTrigger>
        <Tabs.Trigger className='tab-trigger' value='headers'>
          Headers
        </Tabs.Trigger>
        <Tabs.Trigger className='tab-trigger' value='body'>
          Body
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='query-params' className='tab-content'>
        <KeyValuePane
          keyPairValueList={queryParams}
          onAdd={onAddKeyPair}
          onUpdate={onUpdateKeyPair}
          onRemove={onRemoveKeyPair}
          type={'QueryParams'}
          requestTabId={requestTabId}
        />
      </Tabs.Content>
      <Tabs.Content value='headers' className='tab-content'>
        <KeyValuePane
          keyPairValueList={headers}
          onAdd={onAddKeyPair}
          onUpdate={onUpdateKeyPair}
          onRemove={onRemoveKeyPair}
          type='Headers'
          requestTabId={requestTabId}
        />
      </Tabs.Content>
      <Tabs.Content value='body' className='tab-content'>
        <JsonEditorPane
          value={body}
          onChange={(body: string) => onChangeRequestBody(body, requestTabId)}
        />
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default RequestTabGroup
