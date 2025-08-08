// Dashboard.jsx
import styled from "styled-components";
import RevenueCharts from "../components/Dashboard/RevenueCharts";

const Dashboard = () => {
  return (
    <DashboardPageContainer>
      <RevenueCharts />
      <p>Welcome to the RevIntel Dashboard!</p>
    </DashboardPageContainer>
  );
};

const DashboardPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export default Dashboard;
