import React from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

import '../Tab-Groups.scss'

import KeyValuePane from '../../Panes/KeyValuePane/KeyValuePane'
import TabPanel from '../TabPanel'
import JsonEditorPane from '@components/Panes/JsonEditorPane'
import { useApplicationData } from '@store/useApplicationData'

const RequestTabGroup = () => {
  const { headers, queryParams, requestBody, setHeaders, setQueryParams, setRequestBody } =
    useApplicationData((state) => state)

  const requestTabs = [
    {
      slug: 'query-params',
      title: 'Query Params',
    },
    {
      slug: 'headers',
      title: 'Headers',
    },
    {
      slug: 'body',
      title: 'Body',
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
      <TabPanel>
        <KeyValuePane keyPairValueList={queryParams} onChange={setQueryParams} />
      </TabPanel>
      <TabPanel>
        <KeyValuePane keyPairValueList={headers} onChange={setHeaders} />
      </TabPanel>
      <TabPanel>
        <JsonEditorPane value={requestBody} onChange={setRequestBody} />
      </TabPanel>
    </Tabs>
  )
}

export default RequestTabGroup
