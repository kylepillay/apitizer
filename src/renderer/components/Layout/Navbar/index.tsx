import React from 'react'
import Logo from '../../General/Logo'

export default function Navbar() {
  return (
    <header className='flex items-center bg-gray-700 px-4 py-2'>
      <div className='flex items-center'>
        <Logo width={100} color='#FFFFFF' />
      </div>
    </header>
  )
}
