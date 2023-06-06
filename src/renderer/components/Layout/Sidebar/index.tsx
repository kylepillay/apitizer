import React from 'react'

function Sidebar() {
  return (
    <div className='flex w-20 flex-col border-r border-r-gray-800 bg-gray-800 text-white'>
      <button className='flex h-16 items-center justify-center bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
      <button className='flex h-16 items-center justify-center bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </button>
      <button className='flex h-16 items-center justify-center bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 20v-2m0 0l-2-2m2 2l2-2'
          />
        </svg>
      </button>
    </div>
  )
}

export default Sidebar
