import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import NavigationPanel from './NavigationPanel'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='border-b-1 flex h-screen flex-col'>
        <Navbar />
        <div className='flex flex-1 flex-row'>
          <Sidebar />
          <NavigationPanel />
          <main className='w-full'>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
