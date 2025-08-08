import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardPageContainer>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </DashboardPageContainer>
  );
};

const DashboardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
`;

export default Dashboard;
