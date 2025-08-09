import styled from "styled-components";
import LineChart from "../../assets/LineChart";
import VisualCard from "../../assets/VisualCard";

const RevenueLineChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 90, 200, 170],
        borderColor: "#0084C7",
        tension: 0.1,
      },
    ],
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
