import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
