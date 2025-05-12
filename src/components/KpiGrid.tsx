import KpiCard from './KpiCard';

const KpiGrid = () => {
  return (
    // Responsive KPI card layout with spacing
    <div className="flex flex-wrap gap-4">
      {/* Each card represents a single KPI metric */}
      <KpiCard
        title="Infrastructure Units"
        value="€421.07"
        description="This describes variable one and what the shown data means."
      />
      <KpiCard
        title="Charging Growth"
        value="33.07"
        description="This describes variable two and what the shown data means."
      />
      <KpiCard
        title="Localization change"
        value="21.9%"
        description="This describes variable two and what the shown data means."
      />
      <KpiCard
        title="Fleet growth"
        value="7.03%"
        description="This describes variable two and what the shown data means."
      />
    </div>
  );
};

export default KpiGrid;
