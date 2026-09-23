import React from 'react';
import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 flex justify-center overflow-x-hidden">
        <div className="w-full max-w-[768px] px-6 py-12">
          {children}
        </div>
      </main>
      <TableOfContents />
    </div>
  );
}
