import styled from "styled-components";
import { COLORS } from "../constants";

const VisualCard = ({ title, subTitle, children, ...styleProps }) => {
  return (
    <CardWrapper {...styleProps}>
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
        <p className="card-subtitle">{subTitle}</p>
      </div>
      <div className="card-content">{children}</div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  .card-header {
    display: flex;
    flex-direction: column;
    .card-title {
      font-size: 1.5rem;
      margin: 0;
      padding-bottom: 5px;
    }
    .card-subtitle {
      margin: 0;
      color: ${COLORS.MUTED_GRAY};
      padding-bottom: 10px;
    }
  }

  .card-content {
    flex: 1;
    min-height: 0;
  }
`;

export default VisualCard;
