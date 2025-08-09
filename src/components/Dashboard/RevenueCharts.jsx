import VisualCard from "../../assets/VisualCard";
import RevenueLineChart from "./RevenueLineChart";
import styled from "styled-components";

const RevenueCharts = () => {
  return (
    <ChartsWrapper>
      <VisualCard>
        <RevenueLineChart />
      </VisualCard>
    </ChartsWrapper>
  );
};

const ChartsWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 500px;
`;
export default RevenueCharts;
