import React, { useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import styled from "styled-components";

const LineChart = ({ chartData, displayLegend = false, ...props }) => {
  // create a stable unique key per mount
  const chartKey = useMemo(() => crypto.randomUUID(), []);
  const chartRef = useRef(null);

  const options = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    pointRadius: 0.7,
    borderWidth: 2,
    pointHoverRadius: 5,
    scales: {
      x: {
        ticks: { font: { family: "Lato" }, color: "black" },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { font: { family: "Lato" }, color: "black" },
        grid: { display: false },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (ti) => {
            if (ti.dataset.tooltip) return ti.dataset.tooltip[ti.dataIndex];
            let label = ti.dataset.label ? ti.dataset.label + ": " : "";
            return label + ti.parsed.y;
          },
          footer: (ti) =>
            ti[0].dataset.footer ? ti[0].dataset.footer[ti[0].dataIndex] : "",
        },
      },
      legend: {
        display: displayLegend,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
          font: { family: "Lato" },
        },
      },
    },
  };

  return (
    <StyledChart {...props}>
      <Line
        key={chartKey} // force a fresh canvas/instance
        ref={chartRef} // so we can destroy on unmount
        data={chartData}
        options={options}
      />
    </StyledChart>
  );
};

const StyledChart = styled.div`
  width: 100%;
  height: 500px;
  margin: auto;
  margin-top: 2vw;
  @media print {
    canvas {
      max-width: 100%;
    }
  }
`;

export default LineChart;
