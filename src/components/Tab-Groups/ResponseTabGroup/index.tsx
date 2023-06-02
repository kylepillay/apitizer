import React, { useEffect } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { ThreeDots } from 'react-loader-spinner'

import ResponseHeaderPane from '../../Panes/ResponseHeaderPane'
import CodeEditor from '../../General/CodeEditor'
import { AxiosResponse } from 'axios'
import { useApplicationData } from '@store/useApplicationData'

const ResponseTabGroup = ({
  response,
}: {
  response: AxiosResponse<unknown, unknown> | undefined
}) => {
  const refreshInProgress = useApplicationData((state) => state.requestInProgress)
  const { responseBody, setResponseBody } = useApplicationData((state) => state)

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
        {refreshInProgress ? (
          <ThreeDots />
        ) : (
          <CodeEditor value={responseBody} onChange={(value) => setResponseBody(value)} />
        )}
      </TabPanel>
      <TabPanel>{refreshInProgress ? null : <ResponseHeaderPane response={response} />}</TabPanel>
    </Tabs>
  )
}

export default ResponseTabGroup
