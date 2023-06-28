import { BoltSlashIcon, BookmarkIcon, CogIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex w-20 flex-col border-r border-r-gray-800 bg-gray-700 text-white'>
      <button className='flex h-16 items-center justify-center border-b border-b-gray-800 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'>
        <CogIcon className='h-8 w-8' />
      </button>
      <button className='flex h-16 items-center justify-center border-b border-b-gray-800 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'>
        <BookmarkIcon className='h-8 w-8' />
      </button>
      <button className='flex h-16 items-center justify-center border-b border-b-gray-800 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'>
        <BoltSlashIcon className='h-8 w-8' />
      </button>
    </div>
  )
}

export default Sidebar
