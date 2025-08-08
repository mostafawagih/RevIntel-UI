import styled from "styled-components";
import { COLORS } from "../constants";
import { useLocation } from "react-router-dom";
import arrowUpIcon from "../assets/icons/ArrowUpIcon.svg";
import dashboardIcon from "../assets/icons/DashboardIcon.svg";
import trendingDownIcon from "../assets/icons/TrendingDownIcon.svg";
import trendingUpIcon from "../assets/icons/TrendingUpIcon.svg";
import AccelerationIcon from "../assets/icons/AccelerationIcon.svg";
import chatIcon from "../assets/icons/ChatIcon.svg";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarHeader>
        <LogoSection>
          <LogoIcon>
            <img src={arrowUpIcon} alt="Arrow Up" />
          </LogoIcon>
          <LogoText>RevenueGrowth</LogoText>
        </LogoSection>
        <CloseButton onClick={onClose}>×</CloseButton>
      </SidebarHeader>

      <NavSection>
        <NavTitle>Navigation</NavTitle>
        <NavList>
          <NavItem>
            <NavLink
              href="/dashboard"
              active={location.pathname === "/dashboard" ? 1 : 0}
            >
              <NavIcon>
                <img src={dashboardIcon} alt="Arrow Up" />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/churn-prediction"
              active={location.pathname === "/churn-prediction" ? 1 : 0}
            >
              <NavIcon>
                <img src={trendingDownIcon} alt="Arrow Up" />
              </NavIcon>
              <NavText>Churn Prediction</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/upsell-insights">
              <NavIcon>
                <img src={trendingUpIcon} alt="Arrow Up" />
              </NavIcon>
              <NavText>Upsell Insights</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/deal-acceleration">
              <NavIcon>
                <img src={AccelerationIcon} alt="Arrow Up" />
              </NavIcon>
              <NavText>Deal Acceleration</NavText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ai-assistant">
              <NavIcon>
                <img src={chatIcon} alt="AI Assistant" />
              </NavIcon>
              <NavText>AI Assistant</NavText>
            </NavLink>
          </NavItem>
        </NavList>
      </NavSection>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: ${(props) => (props.isOpen ? "280px" : "0px")};
  transition: width 0.25s cubic-bezier(0.2, 0, 0.2, 1);
  background: linear-gradient(135deg, ${COLORS.NAVY_BLUE} 0%, #1a365d 100%);
  overflow-x: hidden;
  height: 100vh;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 0;
  z-index: 1;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 100px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoIcon = styled.div`
  background: ${COLORS.BABY_BLUE};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: white;

  img,
  svg {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
  }
`;

const LogoText = styled.h1`
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavSection = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NavTitle = styled.h2`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.7rem;
  font-weight: 00;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 20px 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const NavItem = styled.li`
  margin-bottom: 0px;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  background-color: ${(props) =>
    props.active ? "rgba(255,255,255,0.15)" : "transparent"};
  box-shadow: ${(props) =>
    props.active ? "0 2px 8px 0 rgba(0,0,0,0.04)" : "none"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }
`;

const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  img,
  svg {
    width: 15px;
    height: 15px;
    filter: brightness(0) invert(1);
    padding-right: 10px;
  }
`;

const NavText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
`;

export default Sidebar;
