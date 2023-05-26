import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import './Tab-Groups.css'

import KeyValuePane from '../Panes/KeyValue/KeyValuePane'
import { keyPairInitState } from '../../components/Workspace/Request/RequestPanel'
import JsonEditorPane from '@components/Panes/Json/JsonEditorPane'

export default function RequestTabGroup({
  queryParams,
  setQueryParams,
  headers,
  setHeaders,
  body,
  setBody,
}: {
  queryParams: object
  setQueryParams: React.Dispatch<React.SetStateAction<typeof keyPairInitState>>
  headers: object
  setHeaders: React.Dispatch<React.SetStateAction<typeof keyPairInitState>>
  body: string
  setBody: object
}) {
  const requestTabs = [
    {
      slug: 'query-params',
      title: 'Query Params',
      panel: KeyValuePane,
      paneValue: queryParams,
      setPaneValue: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      panel: KeyValuePane,
      paneValue: headers,
      setPaneValue: setHeaders,
    },
    {
      slug: 'body',
      title: 'Body',
      panel: JsonEditorPane,
      paneValue: body,
      setPaneValue: setBody,
    },
  ]

  return (
    <Tabs forceRenderTabPanel selectedTabClassName='border-b-2 text-sky-800'>
      <TabList className='mt-5 flex rounded-t-lg border border-gray-300'>
        {requestTabs.map((tab) => (
          <Tab
            className='mr-3 cursor-pointer border-sky-600 px-4 py-2 
                          hover:text-sky-700 focus:outline-none'
            key={tab.slug}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      {requestTabs.map((tab) => (
        <TabPanel
          className='react-tabs__tab-panel rounded-b-lg border border-t-0 border-gray-300 px-4 py-4'
          key={tab.slug}
        >
          <tab.panel extensions={[]} value={tab.paneValue} onChange={tab.setPaneValue} />
        </TabPanel>
      ))}
    </Tabs>
  )
}
