import ChurnFactors from "./ChurnFactors";
import ChurnLineChart from "./ChurnLineChart";
import styled from "styled-components";

const ChurnCharts = () => {
  return (
    <ChartsWrapper>
      <ChurnLineChart />
      <ChurnFactors />
    </ChartsWrapper>
  );
};

const ChartsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: space-between;
  gap: 20px;
`;
export default ChurnCharts;
