import clsx from 'clsx'
import React from 'react'

const TabSpaceFiller: React.FC = () => {
  return (
    <div
      className={clsx([
        'flex h-12 flex-1 items-center justify-center',
        'cursor-pointer',
        'border-b border-gray-300 bg-gray-100 dark:border-gray-600',
      ])}
    />
  )
}

export default TabSpaceFiller
