import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <p>NewsExplorer</p>
          </Link>
        </div>
      </div>
      <div className="header__button-container">
        <button type="button" className="header__home-button">
          Home
        </button>
        <button type="button" className="header__savearticles-button">
          Home
        </button>
        <button type="button" className="header__logout-button">
          Home
        </button>
      </div>
    </header>
  );
};

export default Header;
