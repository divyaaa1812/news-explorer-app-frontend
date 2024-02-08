import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const Header = ({ loggedIn, onOpenModal }) => {
  const headerLogoClassName = `header__logo-link ${
    loggedIn ? `header__logo-link` : `header__logo-notloggedin`
  }`;
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className={headerLogoClassName}>
          <p>NewsExplorer</p>
        </Link>
        <Navigation loggedIn={loggedIn} onOpenModal={onOpenModal} />
      </div>
      <div className="header__searchform">
        {loggedIn ? <SavedNewsHeader /> : <SearchForm />}
      </div>
    </header>
  );
};

export default Header;
