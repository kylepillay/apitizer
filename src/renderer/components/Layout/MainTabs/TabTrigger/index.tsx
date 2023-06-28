import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useApplicationData } from 'renderer/store/useApplicationData'

export interface TabTriggerProps {
  title: string
  value: string
  requestId: number
}

const TabTrigger: React.FC<TabTriggerProps> = ({ title, value, requestId }) => {
  const { removeRequestTab } = useApplicationData((state) => state)
  return (
    <Tabs.Trigger
      className={clsx(
        'group h-12',
        'border-r border-gray-300 dark:border-gray-600',
        'border-b first:border-r last:border-l',
        'border-gray-300 border-b-transparent dark:border-gray-600',
        'flex-1',
        'radix-state-active:bg-white radix-state-inactive:bg-gray-100 dark:radix-state-active:bg-gray-100',
        'border-t-8 radix-state-active:border-t-blue-600',
        'radix-state-active:border-b-transparent radix-state-inactive:border-b-gray-300',
        'min-w-xs relative flex max-w-xs flex-row items-center justify-center pt-1',
      )}
      value={value}
    >
      <div className={clsx('text-sm font-medium', 'text-gray-600 dark:text-gray-100')}>{title}</div>
      <div
        className={clsx(
          'text-sm font-medium',
          'hidden group-hover:flex',
          'text-gray-600 dark:text-white',
          'absolute right-0 top-0 h-10 w-12 radix-state-inactive:pt-1',
          'flex items-center justify-center',
        )}
        onClick={(e) => {
          e.stopPropagation()
          removeRequestTab(requestId)
        }}
      >
        <XMarkIcon className='h-5 w-5' />
      </div>
    </Tabs.Trigger>
  )
}

export default TabTrigger
