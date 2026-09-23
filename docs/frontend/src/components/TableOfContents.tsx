import React from 'react';

export default function TableOfContents() {
  return (
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
}
