import styled from "styled-components";
import LineChart from "../../assets/LineChart";

const RevenueCharts = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 90, 200, 170],
        borderColor: "#0084C7",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
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
  width: 80%;
  height: 500px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export default RevenueCharts;
