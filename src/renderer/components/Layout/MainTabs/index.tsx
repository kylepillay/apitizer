import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { PlusIcon } from '@heroicons/react/20/solid'

import { useApplicationData } from '../../../store/useApplicationData'
import TabTrigger from './TabTrigger'
import RequestPanel from 'renderer/components/Workspace/Request/RequestPanel'
import ResponsePanel from 'renderer/components/Workspace/Response/ResponsePanel'

const MainTabs = () => {
  const { requestTabs } = useApplicationData((state) => state)

  return (
    <Tabs.Root defaultValue={JSON.stringify(requestTabs[0].id)}>
      <Tabs.List
        className={clsx('dark:bg-gray-800, flex w-full bg-white')}
        aria-label='request-tabs'
      >
        {requestTabs.map((tab) => (
          <TabTrigger key={tab.id} title={tab.name} value={JSON.stringify(tab.id)} />
        ))}
        <div
          className='flex h-12 w-12 cursor-pointer items-center justify-center border-r border-gray-300 bg-slate-200 hover:bg-gray-50 dark:border-gray-600'
          onClick={() => {
            window.electron.ipcRenderer.sendMessage('add-new-request')
          }}
        >
          <PlusIcon className='h-8 w-8 text-gray-500 dark:text-gray-400' />
        </div>
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
