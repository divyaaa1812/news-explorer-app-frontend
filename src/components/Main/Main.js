import "./Main.css";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({
  loggedIn,
  searchResults,
  isLoading,
  error,
  onCardClick,
  handleBookmarkClick,
  hasBookmark,
}) => {
  return (
    <main className="main">
      <SearchResults
        loggedIn={loggedIn}
        searchResults={searchResults}
        isLoading={isLoading}
        error={error}
        onCardClick={onCardClick}
        handleBookmarkClick={handleBookmarkClick}
        hasBookmark={hasBookmark}
      />
      <About />
    </main>
  );
};

export default Main;
