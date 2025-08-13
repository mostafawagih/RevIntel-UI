import styled from "styled-components";
import LineChart from "../../assets/LineChart";
import { COLORS } from "../../constants";

const RevenueLineChart = ({ datasets, labels }) => {
  const processedDatasets = datasets?.map((dataset) => ({
    ...dataset,
    tension: 0.1,

    borderColor: COLORS.BABY_BLUE,
  }));

  const chartData = {
    labels,
    datasets: processedDatasets || [],
  };

  return (
    <ChartWrapper>
      <LineChart chartData={chartData} displayLegend={true} />
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  height: 100%;
`;

export default RevenueLineChart;
