import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { PlusIcon } from '@heroicons/react/20/solid'

import { useApplicationData } from '../../../store/useApplicationData'
import TabTrigger from './TabTrigger'
import RequestPanel from 'renderer/components/Workspace/Request/RequestPanel'
import ResponsePanel from 'renderer/components/Workspace/Response/ResponsePanel'
import TabSpaceFiller from './TabsSpaceFiller'

const MainTabs: React.FC = () => {
  const { requestTabs, addNewRequest } = useApplicationData((state) => state)

  return (
    <Tabs.Root defaultValue={JSON.stringify(requestTabs[0].id)}>
      <Tabs.List
        className={clsx('dark:bg-gray-800, bg-white, flex w-full')}
        aria-label='request-tabs'
      >
        {requestTabs.map((tab) => (
          <TabTrigger
            key={tab.id}
            title={tab.name}
            requestId={tab.id}
            value={JSON.stringify(tab.id)}
          />
        ))}
        <div
          className='flex h-12 w-16 cursor-pointer items-center justify-center border-b border-gray-300 bg-gray-100 pt-1 hover:bg-gray-500  dark:border-gray-600 dark:hover:bg-gray-50'
          onClick={() => {
            addNewRequest()
          }}
        >
          <PlusIcon className='h-8 w-8 text-gray-500 hover:text-white dark:text-gray-400' />
        </div>
        <TabSpaceFiller />
      </Tabs.List>
      {requestTabs.map((tab) => (
        <Tabs.Content key={tab.id} value={JSON.stringify(tab.id)} className='p-4'>
          <RequestPanel
            id={tab.id}
            name={tab.name}
            url={tab.url}
            body={tab.body}
            method={tab.method}
            queryParams={tab.queryParams}
            headers={tab.headers}
          />
          <ResponsePanel response={tab.response} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export default MainTabs
