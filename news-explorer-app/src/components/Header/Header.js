import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          <p>NewsExplorer</p>
        </Link>
      </div>
      <div className="header__button-container">
        <button type="button" className="header__button">
          Home
        </button>
        <button type="button" className="header__button">
          Saved articles
        </button>
        <button type="button" className="header__logout-btn">
          Elise
          <span>
            <img src={logout} className="header__logout-button" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
