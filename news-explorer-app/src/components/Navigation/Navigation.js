import "./Navigation.css";
import logout from "../../images/logout.png";

const Navigation = ({ loggedIn }) => {
  return (
    <>
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
                  src={logout}
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
            className="header__logout-nav-btn header__signin-btn"
          >
            SignIn
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
