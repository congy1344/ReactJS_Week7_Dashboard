import React, { useState, useEffect } from "react";
import DetailedReport from "./DetailedReport";
import overviewIcon from "../../assets/images/Squares four 1.png";
import cartIcon from "../../assets/images/Button 1509.png";
import dollarIcon from "../../assets/images/Button 1529.png";
import userIcon from "../../assets/images/Button 1530.png";

const Overview = () => {
  const [stats, setStats] = useState({
    turnover: null,
    profit: null,
    customers: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [turnoverRes, profitRes, customersRes] = await Promise.all([
          fetch("http://localhost:3001/turnover"),
          fetch("http://localhost:3001/profit"),
          fetch("http://localhost:3001/customers"),
        ]);

        const turnover = await turnoverRes.json();
        const profit = await profitRes.json();
        const customers = await customersRes.json();

        setStats({
          turnover,
          profit,
          customers,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="overview">
      <h2 className="section-title">Overview</h2>

      <div className="stats-container">
        <div className="stat-card turnover">
          <h3>Turnover</h3>
          <div className="stat-value">
            {formatCurrency(stats.turnover?.current)}
          </div>
          <div className="stat-change">
            ↑ {stats.turnover?.change}% period of change
          </div>
        </div>

        <div className="stat-card profit">
          <h3>Profit</h3>
          <div className="stat-value">
            {formatCurrency(stats.profit?.current)}
          </div>
          <div className="stat-change">
            ↑ {stats.profit?.change}% period of change
          </div>
        </div>

        <div className="stat-card customers">
          <h3>New customer</h3>
          <div className="stat-value">{stats.customers?.current}</div>
          <div className="stat-change">
            ↑ {stats.customers?.change}% period of change
          </div>
        </div>
      </div>

      <DetailedReport />
    </div>
  );
};

export default Overview;
