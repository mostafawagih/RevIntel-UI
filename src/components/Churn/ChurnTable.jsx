import styled from "styled-components";
import VisualCard from "../../assets/VisualCard";
import { COLORS } from "../../constants";
import BarChart from "../../assets/BarChart";

const ChurnTable = ({ churnRiskData }) => {
  if (!churnRiskData || churnRiskData.length === 0) {
    return (
      <ChurnTableWrapper>
        <VisualCard
          title={"At-Risk Customers"}
          subTitle={"Customers with highest churn probability"}
        >
          <p>No data available</p>
        </VisualCard>
      </ChurnTableWrapper>
    );
  }

  const headers = Object.keys(churnRiskData[0]);

  return (
    <ChurnTableWrapper>
      <VisualCard
        title={"At-Risk Customers"}
        subTitle={"Customers with highest churn probability"}
      >
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {churnRiskData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header) => {
                  if (header === "RiskScore") {
                    const pct =
                      Number(String(row[header]).replace("%", "")) || 0;
                    return (
                      <td
                        key={header}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <BarChart
                          percentage={pct}
                          color={COLORS.RED}
                          height={7}
                          trackColor={COLORS.LIGHT_GRAY}
                          ariaLabel={`${row.Customer} risk`}
                        />
                        <p style={{ margin: 0 }}>{pct}%</p>
                      </td>
                    );
                  }
                  const value = row[header];
                  return (
                    <td key={header}>
                      {Array.isArray(value) ? value.join(", ") : value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </VisualCard>
    </ChurnTableWrapper>
  );
};

export const ChurnTableWrapper = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      font-size: 0.9rem;
      font-weight: 400;
      padding: 20px 60px 10px 0;
    }
    td {
      padding: 20px 60px 20px 0;
      font-size: 1.1rem;
      font-weight: 500;
      min-height: 50px;
    }
  }
  th:nth-child(1),
  td:nth-child(1) {
    width: 200px;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 130px;
  }
`;

export default ChurnTable;
