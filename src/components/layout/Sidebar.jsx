import dashboardIcon from "../../assets/images/Squares four 1.png";
import projectsIcon from "../../assets/images/Folder.png";
import teamsIcon from "../../assets/images/Groups.png";
import analyticsIcon from "../../assets/images/Pie chart.png";
import messagesIcon from "../../assets/images/Chat.png";
import integrationsIcon from "../../assets/images/Code.png";
import groupImage from "../../assets/images/Group.png";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
