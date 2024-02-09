import "./Navigation.css";
import { Link } from "react-router-dom";
import logoutwt from "../../images/logoutwt.png";

const Navigation = ({ loggedIn, onOpenModal }) => {
  return (
    <div className="header__logo">
      <Link to="/" className="header__logo-text">
        <p>NewsExplorer</p>
      </Link>
      {loggedIn ? (
        <div className="header__nav">
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
                  src={logoutwt}
                  alt="click to logout"
                  className="header__logout-button"
                />
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="header__logout-nav">
          <button
            type="button"
            className="header__logout-nav-btn header__home-btn"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => onOpenModal("SigninModal")}
            className="header__logout-nav-btn header__signin-btn"
          >
            SignIn
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
