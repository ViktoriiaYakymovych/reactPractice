export const StatisticsCard = ({ stat: { label, percentage } }) => {
  return (
    <div>
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
  );
};
