import React, { useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styled from "styled-components";
import { toRgba } from "../utils/ChartUtils";

const LineChart = ({ chartData, displayLegend = false, ...props }) => {
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
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
          font: { family: "Lato" },
        },
      },
    },
  };

  const dataWithGradient = useMemo(() => {
    if (!chartData) return chartData;

    return {
      ...chartData,
      datasets: chartData.datasets.map((ds) => ({
        ...ds,
        fill: "start",
        backgroundColor: (context) => {
          const { chart } = context;
          const { ctx, chartArea } = chart || {};
          if (!chartArea) {
            return toRgba(ds.borderColor, 0.25);
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(
            0,
            ds.fillTopColor ?? toRgba(ds.borderColor, 0.35)
          );
          gradient.addColorStop(
            1,
            ds.fillBottomColor ?? toRgba(ds.borderColor, 0)
          );
          return gradient;
        },
      })),
    };
  }, [chartData]);

  return (
    <StyledChart {...props}>
      <Line
        key={chartKey}
        ref={chartRef}
        data={dataWithGradient}
        options={options}
      />
    </StyledChart>
  );
};

const StyledChart = styled.div`
  width: 100%;
  margin: 0;
  height: 100%;
`;

export default LineChart;
