interface Props {
  content: string; // Text or JSX to display inside the tooltip
}

const HoverContextWindow = ({ content }: Props) => {
  return (
    // Floating tooltip-style box that appears below the variable on hover
    <div className="absolute z-50 mt-2 w-[250px] p-3 rounded-md bg-[#1a1a1a] border border-[#333] text-sm text-gray-300 shadow-xl animate-fade-in">
      {content}
    </div>
  );
};

export default HoverContextWindow;
