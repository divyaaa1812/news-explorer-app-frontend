import "./Main.css";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({
  loggedIn,
  searchResults,
  isLoading,
  error,
  handleBookmarkClick,
  bookmarkIds,
}) => {
  return (
    <main className="main">
      <SearchResults
        loggedIn={loggedIn}
        searchResults={searchResults}
        isLoading={isLoading}
        error={error}
        handleBookmarkClick={handleBookmarkClick}
        bookmarkIds={bookmarkIds}
      />
      <About />
    </main>
  );
};

export default Main;
