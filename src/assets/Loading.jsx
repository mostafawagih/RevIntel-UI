import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Loading = ({ ...props }) => {
  return (
    <StyledLoading {...props}>
      <CircularProgress />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  span {
    width: 3vw !important;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Loading;
