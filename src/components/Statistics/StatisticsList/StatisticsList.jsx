import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import { Section, Wrapper } from './StatisticsList.styled';

export const StatisticsList = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title.toUpperCase()}</h2>}

      <ul>
        {stats.map(stat => (
          <Wrapper key={stat.id}>
            <StatisticsCard stat={stat} />
          </Wrapper>
        ))}
      </ul>
    </Section>
  );
};
