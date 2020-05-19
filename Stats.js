import styled from "styled-components";
import useDataFeed from "./../utils/useDataFeed";
const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #6679cc;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export default function Stats({ url }) {
  const { datafeed: stats, error } = useDataFeed(url);
  if (!stats) return <li>No data yet...</li>;

  console.log(stats);
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value.toLocaleString()}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value.toLocaleString()}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value.toLocaleString()}</span>
      </StatBlock>
    </StatGrid>
  );
}
