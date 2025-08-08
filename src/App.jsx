// src/App.js
import { useState } from "react";
import { styled } from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ChurnPrediction from "./pages/ChurnPrediction";
import Sidebar from "./components/SideBar";
import openPanelIcon from "./assets/icons/OpenPanelIcon.svg";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const routes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/churn-prediction", element: <ChurnPrediction /> },
  ];

  return (
    <AppWrapper>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <MainLayout>
        <Header>
          <HeaderLeft>
            {!isSidebarOpen ? (
              <MenuButton onClick={() => setIsSidebarOpen(true)}>
                <img src={openPanelIcon} alt="Arrow Up" />
              </MenuButton>
            ) : null}
            <PageTitle>RevIntel Dashboard</PageTitle>
          </HeaderLeft>
        </Header>
        <PageContent>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </PageContent>
      </MainLayout>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
`;

const MainLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 100px;
  background-color: white;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  display: flex;
  cursor: pointer;
  padding-left: 8px;
  border-radius: 6px;
  color: #495057;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    color: #212529;
  }

  img,
  svg {
    width: 30px;
    height: 30px;
    padding-right: 10px;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
  padding-left: 8px;
`;

const PageContent = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: #f8f9fa;
`;

export default App;
