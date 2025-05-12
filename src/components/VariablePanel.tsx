import { useState } from 'react';
import VariableItem from './VariableItem';
import HoverContextWindow from "./HoverContextWindow";

interface Props {
  title: string;
  variables: string[];
  selected: string | null;
  setSelected: (label: string) => void;
  activeVariables: string[];
}

const VariablePanel = ({
  title,
  variables,
  selected,
  setSelected,
  activeVariables,
}: Props) => {
  // Stores the currently hovered variable (after 1.5s delay)
  const [hoveredVariable, setHoveredVariable] = useState<string | null>(null);

  // Tooltip descriptions mapped by variable name
  const descriptions: Record<string, string> = {
    'Co2 Distribution': 'Controls the percentage of energy distributed based on carbon emissions.',
    'Fleet sizing': 'Determines how many vehicles are allocated per demand zone.',
    'Border Rate': 'Impacts cost calculation based on regional limits.',
    // Add more if needed
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm text-gray-400 font-medium">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {variables.map((v, idx) => {
          const isHovered = hoveredVariable === v;

          return (
            <div
              key={idx}
              className="relative"
              onMouseLeave={() => setHoveredVariable(null)} // Auto-close tooltip on mouse exit
            >
              <VariableItem
                label={v}
                active={activeVariables.includes(v)}
                onClick={() => setSelected(v)}
                onDelayedHover={() => setHoveredVariable(v)} // Trigger tooltip after 1.5s hover
              />

              {/* Tooltip shown for the hovered variable */}
              {isHovered && (
                <HoverContextWindow content={descriptions[v] || `Details about "${v}"`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VariablePanel;
