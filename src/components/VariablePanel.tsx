import { useState } from 'react';
import VariableItem from './VariableItem';
import HoverContextWindow from './HoverContextWindow';

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
  const [hoveredVariable, setHoveredVariable] = useState<string | null>(null);

  const descriptions: Record<string, string> = {
    'Co2 Distribution': 'Controls the percentage of energy distributed based on carbon emissions.',
    'Fleet sizing': 'Determines how many vehicles are allocated per demand zone.',
    'Border Rate': 'Impacts cost calculation based on regional limits.',
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm text-gray-400 font-medium">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {variables.map((v, idx) => {
          const isHovered = hoveredVariable === v;
          const isSelected = selected === v;

          return (
            <div
              key={idx}
              className="relative"
              onMouseLeave={() => setHoveredVariable(null)}
            >
              <VariableItem
                label={v}
                active={activeVariables.includes(v) || isSelected}
                onClick={() => setSelected(v)}
                onDelayedHover={() => setHoveredVariable(v)}
              />

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
