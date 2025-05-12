import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection = ({ title, children }: Props) => {
  // Controls whether the section is expanded or collapsed
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-[#333] rounded-md overflow-hidden">
      {/* Section header with toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-[#1c1c1e] hover:bg-[#2a2a2a] transition"
      >
        <span className="text-white font-medium text-sm">{title}</span>
        {/* Chevron rotates when the section is open */}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Collapsible body content */}
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
