import styled from "styled-components";
import BarChart from "../../assets/BarChart";
import { COLORS } from "../../constants";

const ChurnFactorsBarChart = ({ churnFactorsData }) => {
  return (
    <ChartsWrapper>
      {churnFactorsData.map((item, index) => (
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
