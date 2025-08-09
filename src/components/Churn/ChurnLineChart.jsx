import styled from "styled-components";
import LineChart from "../../assets/LineChart";
import { COLORS } from "../../constants";
import VisualCard from "../../assets/VisualCard";

const ChurnLineChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 90, 200, 170],
        borderColor: COLORS.RED,
        tension: 0.1,
      },
      {
        label: "Predicted Sales",
        data: [130, 160, 175, 110, 210, 180, 150, 145, 120],
        borderColor: "#808080",
        tension: 0.1,
      },
    ],
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
