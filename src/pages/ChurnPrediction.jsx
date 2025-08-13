import { useEffect, useState } from "react";
import styled from "styled-components";
import ChurnCharts from "../components/Churn/ChurnCharts";
import ChurnTable from "../components/Churn/ChurnTable";
import Loading from "../assets/Loading";

const ChurnPrediction = () => {
  const [rateData, setRateData] = useState([]);
  const [predictedData, setPredictedData] = useState([]);
  const [churnRiskData, setChurnRiskData] = useState([]);
  const [churnFactorsData, setChurnFactorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch("http://localhost:4000/api/churn", {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        const data = json?.churn_prediction_data || json?.data || {};
        if (cancelled) return;
        setRateData(Array.isArray(data.rateData) ? data.rateData : []);
        setPredictedData(
          Array.isArray(data.predictedData) ? data.predictedData : []
        );
        setChurnRiskData(
          Array.isArray(data.churnRiskData) ? data.churnRiskData : []
        );
        setChurnFactorsData(
          Array.isArray(data.churnFactorsData) ? data.churnFactorsData : []
        );
        console.log("Churn Prediction data:", data);
      } catch (e) {
        if (cancelled) return;
        setErr(e?.message || "Failed to load churn data");
        console.error("Churn Prediction Error:", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <ChurnPredictionPageContainer>
        <Loading style={{ height: "40vh" }} />
      </ChurnPredictionPageContainer>
    );
  }

  if (err) {
    return (
      <ChurnPredictionPageContainer>
        <div className="churn-prediction-title-container">
          <h1 className="churn-prediction-title">Churn Prediction</h1>
          <p className="churn-prediction-subtitle" style={{ color: "crimson" }}>
            {err}
          </p>
        </div>
      </ChurnPredictionPageContainer>
    );
  }

  const hasAnyData =
    rateData.length ||
    predictedData.length ||
    churnRiskData.length ||
    churnFactorsData.length;

  return (
    <ChurnPredictionPageContainer>
      <div className="churn-prediction-title-container">
        <h1 className="churn-prediction-title">Churn Prediction</h1>
        <p className="churn-prediction-subtitle">
          Identify at-risk customers and take proactive measures
        </p>
      </div>

      {hasAnyData ? (
        <>
          <ChurnCharts
            rateData={rateData}
            predictedData={predictedData}
            churnFactorsData={churnFactorsData}
          />
          <ChurnTable churnRiskData={churnRiskData} />
        </>
      ) : (
        <p>No data available.</p>
      )}
    </ChurnPredictionPageContainer>
  );
};

const ChurnPredictionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  height: 100%;
  .churn-prediction-title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
    .churn-prediction-title {
      margin: 0;
      padding-bottom: 10px;
    }
    .churn-prediction-subtitle {
      margin: 0;
    }
  }
`;

export default ChurnPrediction;
