import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'
import React from 'react'

export interface TabTriggerProps {
  title: string
  value: string
}

const TabTrigger: React.FC<TabTriggerProps> = ({ title, value }) => {
  return (
    <Tabs.Trigger
      className={clsx(
        'group',
        'border-r border-gray-300 dark:border-gray-600',
        'border-b first:border-r last:border-l',
        'border-gray-300 dark:border-gray-600',
        'radix-state-active:border-b-transparent focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800',
        'flex-1 px-3 py-2.5',
        'focus:radix-state-active:border-b-red',
        'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        'max-w-xs',
      )}
      value={value}
    >
      <span className={clsx('text-sm font-medium', 'text-gray-700 dark:text-gray-100')}>
        {title}
      </span>
    </Tabs.Trigger>
  )
}

export default TabTrigger
