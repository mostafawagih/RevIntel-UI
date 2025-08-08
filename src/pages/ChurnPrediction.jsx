import styled from "styled-components";

const ChurnPrediction = () => {
  return (
    <ChurnPredictionPageContainer>
      <h1>Churn Prediction</h1>
      <p>Welcome to the Churn Prediction!</p>
    </ChurnPredictionPageContainer>
  );
};

const ChurnPredictionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default ChurnPrediction;
