import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({
  loggedIn,
  onOpenModal,
  onSearchClick,
  onLogout,
  category,
}) => {
  return (
    <header className="header">
      <Navigation
        loggedIn={loggedIn}
        onOpenModal={onOpenModal}
        onLogout={onLogout}
      />
      <SearchForm onSearchClick={onSearchClick} category={category} />
    </header>
  );
};

export default Header;
