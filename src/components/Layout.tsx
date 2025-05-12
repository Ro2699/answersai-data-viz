import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TabHeader from './TabHeader';
import SlideOver from './SlideOver'; // SlideOver is mounted here to be globally accessible

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-[#0e0e0f] text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main layout area: includes header, content, and SlideOver */}
      <div className="flex flex-col flex-1 bg-[#0e0e0f]">
        {/* Top navigation tabs */}
        <div className="h-16 px-6 flex items-center bg-[#0e0e0f]">
          <TabHeader />
        </div>

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto px-6 py-4">
          <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-xl border border-[#333] p-6 shadow-md">
            {children}
          </div>
        </main>
      </div>

      {/* SlideOver panel stays mounted globally and shows based on Redux state */}
      <SlideOver />
    </div>
  );
};

export default Layout;
