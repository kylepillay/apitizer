import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }: any) {
  return (
    <>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <Navbar />
          <main className='p-4'>{children}</main>
        </div>
      </div>
    </>
  )
}
