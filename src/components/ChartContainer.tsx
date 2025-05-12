import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data representing monthly values (can be swapped with live data)
const sampleData = [
  { name: 'Apr', value: 35 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 40 },
  { name: 'Jul', value: 89.6 },
  { name: 'Aug', value: 60 },
  { name: 'Sep', value: 35 },
  { name: 'Oct', value: 55 },
];

// Custom tooltip that appears when hovering over a data point
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-[#1f1f1f] border border-[#333] p-4 rounded-md text-white shadow-xl animate-fade-in">
        <div className="text-base font-semibold">${value.toFixed(2)}k</div>
        <div className="text-xs text-lime-400 mt-1">▲ 4.6% above target</div>
      </div>
    );
  }
  return null;
};

const ChartContainer = () => {
  return (
    <div className="w-full h-64 bg-[#111112] rounded-md">
      {/* Dropdown to switch between different metrics */}
      <div className="flex justify-end mb-2">
        <div className="relative w-[220px]">
          <select
            className="w-full bg-[#1f1f1f] text-sm text-white border border-[#333] rounded-md px-3 py-1 pr-8 appearance-none"
            defaultValue="Unsatisfied Demand %"
          >
            <option>Unsatisfied Demand %</option>
            <option>Utilization Rate</option>
            <option>Energy Cost</option>
          </select>
          {/* Custom dropdown icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Line chart visualizing the selected metric */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sampleData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{ backgroundColor: '#111112' }} // chart area background
        >
          {/* Grid lines behind the chart */}
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          {/* X-axis configuration */}
          <XAxis
            dataKey="name"
            stroke="#888"
            tick={{ fill: '#ccc', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          {/* Y-axis configuration */}
          <YAxis
            stroke="#888"
            tickFormatter={(value) => `$${value}K`}
            tick={{ fill: '#ccc', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          {/* Custom tooltip on hover */}
          <Tooltip content={<CustomTooltip />} />
          {/* Line chart styling and active point */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#c6ff00"
            strokeWidth={2}
            dot={{ r: 4, stroke: '#c6ff00', strokeWidth: 2, fill: '#1a1a1a' }}
            activeDot={{
              r: 6,
              stroke: '#c6ff00',
              strokeWidth: 2,
              fill: '#1a1a1a',
              style: { filter: 'drop-shadow(0 0 6px #c6ff00)' },
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartContainer;
