import { useState, useEffect } from "react";
import overviewIcon from "../../assets/images/Squares four 1.png";
import cartIcon from "../../assets/images/Button 1509.png";
import dollarIcon from "../../assets/images/Button 1529.png";
import userIcon from "../../assets/images/Button 1530.png";

const Overview = () => {
  const [data, setData] = useState({
    turnover: { current: 0, change: 0 },
    profit: { current: 0, change: 0 },
    customers: { current: 0, change: 0 },
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

        if (!turnoverRes.ok || !profitRes.ok || !customersRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [turnover, profit, customers] = await Promise.all([
          turnoverRes.json(),
          profitRes.json(),
          customersRes.json(),
        ]);

        setData({ turnover, profit, customers });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="overview-section">
      <div className="section-header">
        <div className="section-title">
          <img src={overviewIcon} alt="" className="section-icon" />
          <h2>Overview</h2>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-card pink">
          <div className="stat-header">
            <h3>Turnover</h3>
            <div className="stat-icon">
              <img src={cartIcon} alt="" />
            </div>
          </div>
          <div className="stat-content">
            <h4>{formatCurrency(data.turnover.current)}</h4>
            <p className="stat-change positive">
              ↑ {data.turnover.change}% period of change
            </p>
          </div>
        </div>
        <div className="stat-card blue">
          <div className="stat-header">
            <h3>Profit</h3>
            <div className="stat-icon">
              <img src={dollarIcon} alt="" />
            </div>
          </div>
          <div className="stat-content">
            <h4>{formatCurrency(data.profit.current)}</h4>
            <p className="stat-change positive">
              ↑ {data.profit.change}% period of change
            </p>
          </div>
        </div>
        <div className="stat-card light-blue">
          <div className="stat-header">
            <h3>New customer</h3>
            <div className="stat-icon">
              <img src={userIcon} alt="" />
            </div>
          </div>
          <div className="stat-content">
            <h4>{data.customers.current}</h4>
            <p className="stat-change positive">
              ↑ {data.customers.change}% period of change
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
