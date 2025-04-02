import overviewIcon from "../../assets/images/Squares four 1.png";
import cartIcon from "../../assets/images/Button 1509.png";
import dollarIcon from "../../assets/images/Button 1529.png";
import userIcon from "../../assets/images/Button 1530.png";

const Overview = () => {
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
            <h4>$92,405</h4>
            <p className="stat-change positive">↑ 5.39% period of change</p>
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
            <h4>$32,218</h4>
            <p className="stat-change positive">↑ 5.39% period of change</p>
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
            <h4>298</h4>
            <p className="stat-change positive">↑ 6.84% period of change</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
