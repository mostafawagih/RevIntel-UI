import styled from "styled-components";
import BarChart from "../../assets/BarChart";
import { COLORS } from "../../constants";

const ChurnFactorsBarChart = () => {
  const data = [
    { label: "Pricing Issues", percentage: 50 },
    { label: "Support Quality", percentage: 60 },
    { label: "Feature Gaps", percentage: 70 },
    { label: "Competitor Offers", percentage: 20 },
    { label: "User Experience", percentage: 10 },
    { label: "Technical Issues", percentage: 90 },
  ];
  return (
    <ChartsWrapper>
      {data.map((item, index) => (
        <div className="bar-item-container" key={index}>
          <div className="bar-item-label-and-percentage">
            <p className="bar-item-label">{item.label}</p>
            <p className="bar-item-percentage">{item.percentage}%</p>
          </div>
          <BarChart
            key={index}
            percentage={item.percentage}
            color={COLORS.RED}
            ariaLabel={`churn factor ${item.label}`}
          />
        </div>
      ))}
    </ChartsWrapper>
  );
};

const ChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .bar-item-container {
    .bar-item-label-and-percentage {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .bar-item-percentage {
        margin: 4px;
      }
      .bar-item-label {
        margin: 4px;
      }
    }
  }
`;

export default ChurnFactorsBarChart;
