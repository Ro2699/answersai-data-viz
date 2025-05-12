import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const ScenarioResults = () => {
  const [open, setOpen] = useState(true);

  // Dummy messages to display in the results section
  const messages = [
    'The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.',
    'The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.'
  ];

  return (
    <div className="space-y-3">
      {/* Toggle header with icon and title */}
      <div
        className="flex justify-between items-center cursor-pointer text-lime-400 font-semibold"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Best Scenario Results</span>
        </div>

        {/* Expand/collapse icon */}
        {open ? (
          <ChevronUp className="w-4 h-4 text-lime-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-lime-400" />
        )}
      </div>

      {/* Result cards */}
      {open && (
        <div className="space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-sm border border-lime-400 text-lime-400 rounded-md px-4 py-2 bg-transparent"
            >
              <p>{msg}</p>
              <span className="text-xl leading-none">⋯</span> {/* Placeholder for future action */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScenarioResults;
