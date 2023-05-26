import React from 'react';
import Logo from '../../General/Logo'

export default function Navbar() {
  return (
    <header className="bg-gray-700 px-4 py-2 flex items-center">
      <div className="flex items-center">
        <Logo width={100} />
      </div>
    </header>
  );
}
