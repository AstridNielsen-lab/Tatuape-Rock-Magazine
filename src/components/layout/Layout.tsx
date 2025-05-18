import React, { useState } from 'react';
import Sidebar from './Sidebar';
import RadioPlayer from './RadioPlayer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-dark">
      <div className="noise"></div>
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-dark/80 text-light hover:text-highlight"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Radio Player */}
        <RadioPlayer streamUrl="http://82.145.41.50/stream.mp3?ipport=82.145.41.50_16784" />
      </div>
    </div>
  );
};

export default Layout;