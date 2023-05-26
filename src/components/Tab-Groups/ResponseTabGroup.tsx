import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ThreeDots } from 'react-loader-spinner'

import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane'
import CodeEditor from '../../components/General/CodeEditor'
import { AxiosResponse } from 'axios'

export default function ResponseTabGroup({
  doc,
  setDoc,
  response,
  loading,
}: {
  doc: string
  setDoc: React.Dispatch<React.SetStateAction<string>>
  response: AxiosResponse
  loading: boolean
}) {
  const responseTabs = [
    {
      slug: 'response-body',
      title: 'Response Body',
    },
    {
      slug: 'response-header',
      title: 'Response Header',
    },
  ]
  return (
    <Tabs forceRenderTabPanel selectedTabClassName='border-b-2 text-sky-800'>
      <TabList className='mt-5 flex rounded-t-lg border border-gray-300'>
        {responseTabs.map((tab) => (
          <Tab
            className='mr-3 cursor-pointer border-sky-600 px-4 py-2 hover:text-sky-700 focus:outline-none'
            key={tab.slug}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>

      <TabPanel className='react-tabs__tab-panel rounded-b-lg border border-t-0 border-gray-300 px-4 py-4'>
        {loading ? <ThreeDots /> : <CodeEditor value={doc} onChange={setDoc} />}
      </TabPanel>
      <TabPanel>{loading ? null : <ResponseHeaderPane response={response} />}</TabPanel>
    </Tabs>
  )
}
