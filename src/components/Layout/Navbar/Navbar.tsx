import React from 'react';
import Logo from '../../General/Logo'

// import './navbar.css'

export default function Navbar() {
  return (
    <div className='absolute w-full border-t-4 border-sky-700 bg-white '>
      <div className='border-b border-gray-300'>
        <div className='flex max-w-6xl mx-auto py-3'>
          <Logo width={100} />
        </div>
      </div>
    </div>
  );
}
