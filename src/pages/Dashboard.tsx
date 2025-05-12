import { useDispatch } from 'react-redux';
import { openSlideOver } from '../features/ui/uiSlice';

import Layout from '../components/Layout';
import ChartContainer from '../components/ChartContainer';
import ScenarioResults from '../components/ScenarioResults';
import KpiGrid from '../components/KpiGrid';

import { Zap, RotateCcw, Upload } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Top bar: Title and action buttons */}
        <div className="flex justify-between items-center w-full">
          {/* Left: Page title */}
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-white relative top-[1px]" />
            <h1 className="text-white text-2xl font-semibold">Charging Station</h1>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-3">
            {/* Refresh */}
            <button className="p-2 bg-[#2a2a2a] rounded-md border border-[#333] hover:bg-[#333] transition">
              <RotateCcw className="w-4 h-4 text-white" />
            </button>

            {/* Opens the variable editor panel */}
            <button
              onClick={() => dispatch(openSlideOver())}
              className="bg-[#2a2a2a] text-sm text-white px-4 py-[6px] rounded-md border border-[#333] hover:bg-[#333] transition"
            >
              Edit Variables
            </button>

            {/* Upload (no handler yet) */}
            <button className="p-2 bg-[#2a2a2a] rounded-md border border-[#333] hover:bg-[#333] transition">
              <Upload className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Summary banner for best scenario outcomes */}
        <ScenarioResults />

        {/* Section titles for chart + KPI */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Graphs</h2>

          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-white">Key Performance Indicators</h2>
            <button className="bg-[#2a2a2e] text-sm px-2 py-1 rounded text-white border border-[#333] hover:bg-[#3a3a3c] transition">
              Variables +
            </button>
          </div>
        </div>

        {/* Chart and KPI layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left: Graph */}
          <div className="flex-1 bg-[#1a1a1a] rounded-xl p-5 shadow-md border border-[#333]">
            <ChartContainer />
          </div>

          {/* Right: KPI cards */}
          <div className="w-full lg:w-[400px]">
            <KpiGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
