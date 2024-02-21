import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ loggedIn, onOpenModal, onSearchClick }) => {
  return (
    <header className="header">
      <Navigation loggedIn={loggedIn} onOpenModal={onOpenModal} />
      <SearchForm onSearchClick={onSearchClick} />
    </header>
  );
};

export default Header;
