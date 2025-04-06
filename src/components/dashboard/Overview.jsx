import React, { useState, useEffect } from "react";
import DetailedReport from "./DetailedReport";
import cartIcon from "../../assets/images/Button 1509.png";
import dollarIcon from "../../assets/images/Button 1529.png";
import userIcon from "../../assets/images/Button 1530.png";

const Overview = () => {
  const [data, setData] = useState({
    turnover: null,
    profit: null,
    customers: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [turnoverRes, profitRes, customersRes] = await Promise.all([
          fetch("http://localhost:3001/turnover"),
          fetch("http://localhost:3001/profit"),
          fetch("http://localhost:3001/customers"),
        ]);

        const [turnover, profit, customers] = await Promise.all([
          turnoverRes.json(),
          profitRes.json(),
          customersRes.json(),
        ]);

        setData({ turnover, profit, customers });
        setLoading(false);
      } catch (err) {
        setError("Không thể tải dữ liệu");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div className="overview-section">
      <div className="section-header">
        <h2 className="overview-title">Overview</h2>
      </div>
      <div className="stats-grid">
        <div className="stat-card pink">
          <div className="stat-header">
            <h3>Turnover</h3>
            <div className="stat-icon">
              <img src={cartIcon} alt="Turnover icon" />
            </div>
          </div>
          <div className="stat-content">
            <h4>${data.turnover?.current.toLocaleString()}</h4>
            <div className="stat-change positive">
              <span>↑ {data.turnover?.change}% period of change</span>
            </div>
          </div>
        </div>

        <div className="stat-card blue">
          <div className="stat-header">
            <h3>Profit</h3>
            <div className="stat-icon">
              <img src={dollarIcon} alt="Profit icon" />
            </div>
          </div>
          <div className="stat-content">
            <h4>${data.profit?.current.toLocaleString()}</h4>
            <div className="stat-change positive">
              <span>↑ {data.profit?.change}% period of change</span>
            </div>
          </div>
        </div>

        <div className="stat-card light-blue">
          <div className="stat-header">
            <h3>New customer</h3>
            <div className="stat-icon">
              <img src={userIcon} alt="Customer icon" />
            </div>
          </div>
          <div className="stat-content">
            <h4>{data.customers?.current}</h4>
            <div className="stat-change positive">
              <span>↑ {data.customers?.change}% period of change</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detailed-report-section">
        <DetailedReport />
      </div>
    </div>
  );
};

export default Overview;
