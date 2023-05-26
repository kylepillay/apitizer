import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: any) {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
} 
