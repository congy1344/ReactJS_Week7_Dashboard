import logo from "../../assets/images/Image 1858.png";
import searchIcon from "../../assets/images/Search.png";
import notificationIcon from "../../assets/images/Bell 1.png";
import helpIcon from "../../assets/images/Question 1.png";
import avatarImage from "../../assets/images/Avatar.png";

const Header = () => {
  return (
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
  );
};

export default Header;
