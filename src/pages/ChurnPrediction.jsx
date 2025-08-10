import styled from "styled-components";
import ChurnCharts from "../components/Churn/ChurnCharts";
import ChurnTable from "../components/Churn/ChurnTable";

const ChurnPrediction = () => {
  return (
    <ChurnPredictionPageContainer>
      <div className="churn-prediction-title-container">
        <h1 className="churn-prediction-title">Churn Prediction</h1>
        <p className="churn-prediction-subtitle">
          Identify at-risk customers and take proactive measures
        </p>
      </div>
      <ChurnCharts />
      <ChurnTable />
    </ChurnPredictionPageContainer>
  );
};

const ChurnPredictionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  height: 100%;
  .churn-prediction-title-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    width: 100%;
    .churn-prediction-title {
      margin: 0;
      padding-bottom: 10px;
    }
    .churn-prediction-subtitle {
      margin: 0;
    }
  }
`;

export default ChurnPrediction;
