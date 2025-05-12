import { Info } from 'lucide-react';

interface KpiCardProps {
  title: string;
  description: string;
  value: string;
}

const KpiCard = ({ title, description, value }: KpiCardProps) => {
  return (
    <div className="bg-[#1f1f1f] w-full sm:w-[190px] rounded-lg p-4 border border-[#333] text-white shadow-sm">
      {/* Header with title and info icon */}
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-medium text-gray-200">{title}</h4>
        {/* Info icon – could be extended to show tooltip on hover */}
        <Info className="w-4 h-4 text-gray-400 hover:text-lime-400 transition duration-150 cursor-pointer" />
      </div>

      {/* Short description under title */}
      <p className="text-xs text-gray-500 mb-4 leading-snug">{description}</p>

      {/* Highlighted KPI value */}
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
};

export default KpiCard;
