import styled from "styled-components";
import RevenueCharts from "../components/Dashboard/RevenueCharts";

const Dashboard = () => {
  const salesData = [
    { Jan: 120 },
    { Feb: 150 },
    { Mar: 180 },
    { Apr: 90 },
    { May: 200 },
    { Jun: 170 },
  ];

  return (
    <DashboardPageContainer>
      <div className="dashboard-title-container">
        <h1 className="dashboard-title">Revenue Intelligence Dashboard</h1>
        <p className="dashboard-subtitle">
          Your GTM co-pilot for accelerating growth
        </p>
      </div>
      <RevenueCharts salesData={salesData} />
    </DashboardPageContainer>
  );
};

const DashboardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 20px 100px;
  height: 100%;
  .dashboard-title-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    width: 100%;
    .dashboard-title {
      margin: 0;
      padding-bottom: 10px;
    }
    .dashboard-subtitle {
      margin: 0;
    }
  }
`;

export default Dashboard;
