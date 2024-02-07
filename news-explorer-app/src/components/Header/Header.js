import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
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
              <img
                src={logout}
                alt="click to logout"
                className="header__logout-button"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="header__title-container">
        <p className="header__title savednews-title">Saved articles</p>
        <p className="header__title savednews-subtitle">
          Elise, you have 5 saved articles
        </p>
        <p className="header__title savednews-text">
          By keywords:{" "}
          <span className="header__title savednews-keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
