import { useRef } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface Props {
  label: string;
  active?: boolean;
  onClick?: () => void;
  onDelayedHover?: () => void; // Fires after 1.5s hover delay
}

const VariableItem = ({ label, active = false, onClick, onDelayedHover }: Props) => {
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  // Start a timer when the user hovers over the chip
  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      onDelayedHover?.();
    }, 1500); // 1.5s delay before firing
  };

  // Cancel the timer if the mouse leaves early
  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer flex items-center px-3 py-1 rounded-full text-sm font-medium gap-2
        ${active ? 'bg-lime-500/10 text-lime-400 border border-lime-500' : 'bg-[#1c1c1e] text-gray-300 border border-[#333]'}`}
    >
      <span>{label}</span>
      {/* Icons for potential future variable actions */}
      <div className="flex gap-1 items-center">
        <Plus className="w-3.5 h-3.5 cursor-pointer" />
        <Minus className="w-3.5 h-3.5 cursor-pointer" />
        <ChevronDown className="w-3.5 h-3.5 cursor-pointer" />
      </div>
    </div>
  );
};

export default VariableItem;
