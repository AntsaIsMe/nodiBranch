import React from 'react';
import { Outlet } from 'react-router-dom';
import nodibranchLogo from '../assets/nodibranch.png';

const Sidebar = () => (
  <aside className="w-[260px] h-screen sticky top-0 border-r border-primary/20 overflow-y-auto bg-primary text-white flex flex-col">
    <div className="w-full bg-bg flex justify-center py-6">
      <img src={nodibranchLogo} alt="Nodibranch Logo" className="w-32" />
    </div>
    <div className="p-6 flex-1">
      <nav className="space-y-2">
        <a href="/" className="block py-2 px-3 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-md transition-colors">
          Home
        </a>
        <div className="pt-4 pb-2 text-xs font-semibold text-white/60 uppercase tracking-wider">
          Documentation
        </div>
        <a href="/installation" className="block py-2 px-3 text-sm text-white/80 hover:bg-white/10 rounded-md transition-colors">
          Installation
        </a>
        <a href="/usage" className="block py-2 px-3 text-sm text-white/80 hover:bg-white/10 rounded-md transition-colors">
          Usage
        </a>
      </nav>
    </div>
  </aside>
);

const TOC = () => (
  <aside className="w-[220px] h-screen sticky top-0 p-6 overflow-y-auto hidden lg:block">
    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
      On this page
    </div>
    <nav className="space-y-2 text-sm text-gray-500">
      <a href="#overview" className="block hover:text-primary transition-colors">Overview</a>
      <a href="#quick-start" className="block hover:text-primary transition-colors">Quick Start</a>
    </nav>
  </aside>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 flex justify-center overflow-x-hidden">
        <div className="w-full max-w-[768px] px-6 py-12">
          {children}
        </div>
      </main>
      <TOC />
    </div>
  );
};

export default Layout;
