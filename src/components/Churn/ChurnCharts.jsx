import ChurnFactors from "./ChurnFactors";
import ChurnLineChart from "./ChurnLineChart";
import styled from "styled-components";

const ChurnCharts = ({ rateData, predictedData, churnFactorsData }) => {
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

  const rateTransformed = transformData(rateData);
  const predictedTransformed = transformData(predictedData);

  const allLabels = [
    ...new Set([...rateTransformed.labels, ...predictedTransformed.labels]),
  ];

  const datasets = [
    {
      label: "rate",
      data: rateTransformed.values,
    },
    {
      label: "predicted",
      data: predictedTransformed.values,
    },
  ];

  return (
    <ChartsWrapper>
      <ChurnLineChart datasets={datasets} labels={allLabels} />
      <ChurnFactors churnFactorsData={churnFactorsData} />
    </ChartsWrapper>
  );
};

const ChartsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export default ChurnCharts;
