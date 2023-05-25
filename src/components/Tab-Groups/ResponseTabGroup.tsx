import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThreeDots } from 'react-loader-spinner';

import JsonEditorPane from '../Panes/Json/JsonEditorPane';
import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane';

export default function ResponseTabGroup({ doc, setDoc, response, loading }) {
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

        <TabPanel>
          {loading ? <ThreeDots /> : <JsonEditorPane
            paneValue={doc}
            setPaneValue={setDoc}
            isEditable={false}
          />}
        </TabPanel>
        <TabPanel >
          {loading ? null : <ResponseHeaderPane response={response} />}
        </TabPanel>
      </Tabs>
  );
}
