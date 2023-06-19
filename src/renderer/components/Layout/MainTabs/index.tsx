import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { PlusIcon } from '@heroicons/react/20/solid'

import { useApplicationData } from '../../../store/useApplicationData'
import TabTrigger from './TabTrigger'
import RequestPanel from 'renderer/components/Workspace/Request/RequestPanel'
import ResponsePanel from 'renderer/components/Workspace/Response/ResponsePanel'

const MainTabs = () => {
  const { requestTabs, addNewRequest } = useApplicationData((state) => state)

  return (
    <Tabs.Root defaultValue={requestTabs[0].id}>
      <Tabs.List
        className={clsx('flex w-full rounded-t-lg bg-white dark:bg-gray-800')}
        aria-label='request-tabs'
      >
        {requestTabs.map((tab) => (
          <TabTrigger key={tab.id} title={tab.name} value={tab.id} />
        ))}
        <div
          className='w-12 h-12 bg-slate-200 justify-center items-center flex hover:bg-gray-50 cursor-pointer border-r border-gray-300 dark:border-gray-600'
          onClick={() => addNewRequest()}
        >
          <PlusIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
        </div>
      </Tabs.List>
      {requestTabs.map((tab) => (
        <Tabs.Content key={tab.id} value={tab.id} className='tab-content'>
          <RequestPanel />
          <ResponsePanel />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export default MainTabs
