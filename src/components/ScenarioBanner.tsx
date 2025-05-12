interface ScenarioBannerProps {
  text: string; // Message to display inside the banner
}

const ScenarioBanner = ({ text }: ScenarioBannerProps) => {
  return (
    <div className="bg-[#1C2916] text-[#A3FFA3] border border-[#2f4c2d] rounded-md px-4 py-3 text-sm font-medium flex justify-between items-start">
      {/* Left side: success/info message */}
      <span>{text}</span>

      {/* Right side: action menu button */}
      <button className="text-[#A3FFA3] hover:text-white">•••</button>
    </div>
  );
};

export default ScenarioBanner;
