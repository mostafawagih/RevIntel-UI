import styled from "styled-components";
import { COLORS } from "../constants";

const clamp = (n, min = 0, max = 100) => Math.min(Math.max(n, min), max);

const Track = styled.div`
  width: 100%;
  height: ${(p) => p.$height}px;
  background: ${(p) => p.$trackColor};
  border-radius: ${(p) => p.$height}px;
  overflow: hidden;
`;

const Fill = styled.div`
  width: ${(p) => p.$pct}%;
  height: 100%;
  background: ${(p) => p.$color};
  border-radius: ${(p) => p.$height}px;
  transition: width 300ms ease;
`;

const BarChart = ({
  percentage = 0,
  color,
  height = 10,
  trackColor = COLORS.LIGHT_GRAY,
  ariaLabel = "progress",
}) => {
  const pct = clamp(percentage);
  return (
    <Track
      $height={height}
      $trackColor={trackColor}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
    >
      <Fill $pct={pct} $color={color} $height={height} />
    </Track>
  );
};

export default BarChart;
