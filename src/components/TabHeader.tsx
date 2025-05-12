import React from 'react';

const tabs = ['Charging Stations', 'Fleet Sizing', 'Parking'];

const TabHeader = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div className="flex justify-between items-center w-full h-16">
      {/* Left: Tab navigation */}
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm transition-all outline-none focus:outline-none ${
              activeTab === tab
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right: Search bar */}
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        {/* Search icon inside input field */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TabHeader;
