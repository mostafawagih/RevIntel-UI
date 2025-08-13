import styled from "styled-components";
import VisualCard from "../../assets/VisualCard";
import ChurnFactorsBarChart from "./ChurnBarChart";

const ChurnFactors = ({ churnFactorsData }) => {
  return (
    <ChurnFactorsWrapper>
      <VisualCard
        title="Churn Factors"
        subTitle="Primary causes of customer churn"
        className="churn-factors-card"
      >
        <div className="churn-factors-content"></div>
        <ChurnFactorsBarChart churnFactorsData={churnFactorsData} />
      </VisualCard>
    </ChurnFactorsWrapper>
  );
};

const ChurnFactorsWrapper = styled.div`
  width: 30%;
`;

export default ChurnFactors;
