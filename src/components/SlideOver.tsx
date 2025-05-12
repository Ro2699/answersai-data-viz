import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSlideOver } from '../features/ui/uiSlice';
import { store } from '../app/store';
import { X } from 'lucide-react';
import VariablePanel from './VariablePanel';
import CollapsibleSection from './CollapsibleSection';

type RootState = ReturnType<typeof store.getState>;

const SlideOver = () => {
  const isOpen = useSelector((state: RootState) => state.ui.isSlideOverOpen);
  const dispatch = useDispatch();

  const [selectedVariable, setSelectedVariable] = useState<string | null>(null);
  const [activeVariables, setActiveVariables] = useState<string[]>([]);

  // Simulate autofill: pre-select key variables and trigger description
  const handleAutofill = () => {
    const preset = ['Co2 Distribution', 'Fleet sizing', 'Border Rate'];
    setActiveVariables(preset);
    setSelectedVariable('Co2 Distribution');
  };

  // Close the panel if user presses ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeSlideOver());
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [dispatch]);

  // Prevent rendering if the panel isn't open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/40 flex justify-end"
      onClick={() => dispatch(closeSlideOver())} // Click outside to close
    >
      <div
        className="w-1/2 max-w-[800px] h-full bg-[#0e0e0f] border-l border-[#2a2a2a] shadow-2xl transform transition-transform duration-300 translate-x-0"
        onClick={(e) => e.stopPropagation()} // Prevent inner click from closing
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-[#1f1f1f]">
          <h3 className="text-white text-lg font-semibold">Edit Variables</h3>
          <button
            onClick={() => dispatch(closeSlideOver())}
            className="text-gray-400 hover:text-white transition"
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto h-full space-y-6">
          {/* Search & control buttons */}
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 text-sm rounded border border-[#333] bg-[#1c1c1e] text-white placeholder:text-gray-500"
            />
            <button
              onClick={handleAutofill}
              className="bg-[#222] text-white px-3 py-1.5 rounded text-sm border border-[#444] hover:bg-[#333] transition"
            >
              Autofill
            </button>
            <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 transition">
              Rerun
            </button>
          </div>

          {/* Variable Categories */}
          <div className="space-y-6">
            <VariablePanel
              title="Variable Category 1"
              variables={['Carbon 1', 'Co2 Distribution', 'Fleet sizing']}
              selected={selectedVariable}
              setSelected={setSelectedVariable}
              activeVariables={activeVariables}
            />
            <VariablePanel
              title="Variable Category 2"
              variables={['Parking Rate', 'Border Rate', 'Request rate', 'Variable 1', 'Variable 1', 'Variable 1']}
              selected={selectedVariable}
              setSelected={setSelectedVariable}
              activeVariables={activeVariables}
            />
            <VariablePanel
              title="Variable Category 3"
              variables={['Variable 1', 'Variable 1', 'Variable 1']}
              selected={selectedVariable}
              setSelected={setSelectedVariable}
              activeVariables={activeVariables}
            />
          </div>

          {/* Description for selected variable */}
          {selectedVariable === 'Co2 Distribution' && (
            <div className="bg-[#1a1a1a] text-gray-300 text-sm p-4 rounded-md border border-[#333] space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">Co2 Distribution</span>
                <span className="text-gray-500 text-xs">ⓘ</span>
              </div>
              <p>
                But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a
                skateboard, making it suitable for people of all ages. Whether you’re a student, a professional, or a
                senior citizen, Switch adapts to your needs and lifestyle.
              </p>
            </div>
          )}

          {/* Primary Variables Section */}
          <CollapsibleSection title="Primary Variables">
            <div className="flex flex-wrap gap-2">
              {['Fleet sizing', 'Co2 Distribution'].map((v) => (
                <div
                  key={v}
                  className="px-3 py-1 text-sm rounded-full border border-lime-500 text-lime-400 bg-lime-500/10"
                >
                  {v}
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Secondary Variables Section */}
          <CollapsibleSection title="Secondary Variables">
            <div className="flex flex-wrap gap-2">
              {['Border Rate'].map((v) => (
                <div
                  key={v}
                  className="px-3 py-1 text-sm rounded-full border border-gray-600 text-gray-400 bg-[#1c1c1e]"
                >
                  {v}
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
