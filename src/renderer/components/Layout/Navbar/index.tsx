import React from 'react'
import Logo from 'renderer/components/General/Logo'

const Navbar = () => {
  return (
    <header className='flex items-center border-b border-slate-800 bg-gray-700 px-4 py-2'>
      <div className='flex items-center'>
        <Logo width={100} color='#FFFFFF' />
      </div>
    </header>
  )
}

export default Navbar
