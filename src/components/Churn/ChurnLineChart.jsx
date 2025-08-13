import styled from "styled-components";
import LineChart from "../../assets/LineChart";
import { COLORS } from "../../constants";
import VisualCard from "../../assets/VisualCard";

const ChurnLineChart = ({ datasets, labels }) => {
  const processedDatasets = datasets?.map((dataset) => ({
    ...dataset,
    tension: 0.1,

    borderColor:
      dataset.borderColor ||
      (() => {
        if (dataset.label?.toLowerCase().includes("rate")) {
          return COLORS.RED;
        }
        if (dataset.label?.toLowerCase().includes("predicted")) {
          return COLORS.LIGHT_GRAY;
        }
      })(),
  }));

  const chartData = {
    labels,
    datasets: processedDatasets || [],
  };

  return (
    <ChartWrapper>
      <VisualCard
        title={"Churn Forecast"}
        subTitle={"Historical and predicted churn rates"}
      >
        <LineChart chartData={chartData} displayLegend={true} />
      </VisualCard>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  width: 70%;
  height: 100%;
  .chart-header-container {
    display: flex;
    h4 {
      font-size: 1.5rem;
      margin: 0;
    }
  }
`;

export default ChurnLineChart;
