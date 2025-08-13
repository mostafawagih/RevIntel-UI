import VisualCard from "../../assets/VisualCard";
import RevenueLineChart from "./RevenueLineChart";
import styled from "styled-components";

const RevenueCharts = ({ salesData }) => {
  const transformData = (data) => {
    if (!data || !Array.isArray(data)) return { labels: [], values: [] };

    const labels = [];
    const values = [];

    data.forEach((item) => {
      const key = Object.keys(item)[0];
      const value = item[key];
      labels.push(key);
      values.push(value);
    });

    return { labels, values };
  };

  const { labels, values } = transformData(salesData);

  const datasets = [
    {
      label: "Sales",
      data: values,
    },
  ];

  return (
    <ChartsWrapper>
      <VisualCard>
        <RevenueLineChart datasets={datasets} labels={labels} />
      </VisualCard>
    </ChartsWrapper>
  );
};

const ChartsWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 400px;
`;

export default RevenueCharts;
