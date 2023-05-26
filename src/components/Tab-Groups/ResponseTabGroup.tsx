import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThreeDots } from 'react-loader-spinner';

import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane';
import CodeEditor from '../../components/General/CodeEditor';

export default function ResponseTabGroup({ doc, setDoc, response, loading }: { doc: string, setDoc: React.Dispatch<React.SetStateAction<string>>, response: any, loading: boolean }) {
  const responseTabs = [
    {
      slug: 'response-body',
      title: 'Response Body'
    },
    {
      slug: 'response-header',
      title: 'Response Header'
    }
  ]
  return (
    <Tabs forceRenderTabPanel selectedTabClassName="border-b-2 text-sky-800">
      <TabList className="flex mt-5 border border-gray-300 rounded-t-lg">
        {responseTabs.map((tab) => (
          <Tab
            className="mr-3 py-2 px-4 border-sky-600 focus:outline-none hover:text-sky-700 cursor-pointer"
            key={tab.slug}>
            {tab.title}
          </Tab>
        ))}
      </TabList>

      <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300">
        {loading ? <ThreeDots /> : <CodeEditor
          paneValue={doc}
          setPaneValue={setDoc}
          value={doc}
          onChange={setDoc}
        />}
      </TabPanel>
      <TabPanel >
        {loading ? null : <ResponseHeaderPane response={response} />}
      </TabPanel>
    </Tabs>
  );
}
