import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>
        <div className='flex max-w-6xl min-h-screen pt-[86px] mx-auto px-5 bg-white '>
          <div className='mx-auto w-full py-6'>{children}</div>
        </div>
      </main>
    </>
  );
}
