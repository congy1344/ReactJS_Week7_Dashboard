import { useState } from "react";
import "./App.css";
// Import logo và icons
import logo from "./assets/images/Image 1858.png";
import dashboardIcon from "./assets/images/Squares four 1.png";
import projectsIcon from "./assets/images/Folder.png";
import teamsIcon from "./assets/images/Groups.png";
import analyticsIcon from "./assets/images/Pie chart.png";
import messagesIcon from "./assets/images/Chat.png";
import integrationsIcon from "./assets/images/Code.png";
import groupImage from "./assets/images/Group.png";
import searchIcon from "./assets/images/Search.png";
import notificationIcon from "./assets/images/Bell 1.png";
import helpIcon from "./assets/images/Question 1.png";
import avatarImage from "./assets/images/Avatar.png";
import overviewIcon from "./assets/images/Squares four 1.png";
import reportIcon from "./assets/images/File text 1.png";
import cartIcon from "./assets/images/Button 1509.png";
import dollarIcon from "./assets/images/Button 1529.png";
import userIcon from "./assets/images/Button 1530.png";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
        </div>
        <div className="header-title">
          <h1>Dashboard</h1>
        </div>
        <div className="header-right">
          <div className="search-box">
            <img src={searchIcon} alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-icons">
            <img src={notificationIcon} alt="Notifications" />
            <img src={helpIcon} alt="Help" />
            <img src={avatarImage} alt="Profile" className="avatar" />
          </div>
        </div>
      </header>

      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <a href="#">
                <img src={dashboardIcon} alt="" className="nav-icon" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={projectsIcon} alt="" className="nav-icon" />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={teamsIcon} alt="" className="nav-icon" />
                <span>Teams</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={analyticsIcon} alt="" className="nav-icon" />
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={messagesIcon} alt="" className="nav-icon" />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={integrationsIcon} alt="" className="nav-icon" />
                <span>Integrations</span>
              </a>
            </li>
            {/* <li>
              <a href="#">
                <img src={settingsIcon} alt="" className="nav-icon" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoutIcon} alt="" className="nav-icon" />
                <span>Logout</span>
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <img src={groupImage} alt="Group" className="group-image" />
          <div className="version-info">
            <h3>V2.0 is available</h3>
            <button className="try-now-btn">Try now</button>
          </div>
        </div>
      </aside>

      <main className="main-content">
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

        <section className="detailed-report">
          <div className="section-header">
            <div className="section-title">
              <img src={reportIcon} alt="" className="section-icon" />
              <h2>Detailed report</h2>
            </div>
            <div className="header-buttons">
              <button className="btn-import">
                <span>Import</span>
              </button>
              <button className="btn-export">
                <span>Export</span>
              </button>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>CUSTOMER NAME</th>
                  <th>COMPANY</th>
                  <th>ORDER VALUE</th>
                  <th>ORDER DATE</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="customer-info">
                      <img
                        src={avatarImage}
                        alt=""
                        className="customer-avatar"
                      />
                      <span>Elizabeth Lee</span>
                    </div>
                  </td>
                  <td>AvatarSystems</td>
                  <td>$359</td>
                  <td>10/07/2023</td>
                  <td>
                    <span className="status-new">New</span>
                  </td>
                  <td>
                    <button className="btn-edit">✏️</button>
                  </td>
                </tr>
                {/* Add more rows similar to the first one */}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <span>63 results</span>
            <div className="pagination-controls">
              <button className="prev">←</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <span>...</span>
              <button>10</button>
              <button>11</button>
              <button className="next">→</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
