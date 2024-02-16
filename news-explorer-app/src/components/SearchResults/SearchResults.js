import NewsCard from "../NewsCard/NewsCard";
import "./SearchResults.css";
import searchicon from "../../images/notfound.png";

const SearchResults = ({
  loggedIn,
  searchResults,
  isLoading,
  error,
  handleBookmarkClick,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <p className="preloader__text">Searching for news...</p>
          <div className="preloader__loading-spinner"></div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : searchResults && searchResults?.articles?.length > 0 ? (
        <div className="searchresults__container">
          <h3 className="searchresults__title"> Search results</h3>
          <NewsCard
            loggedIn={loggedIn}
            searchResults={searchResults}
            handleBookmarkClick={handleBookmarkClick}
          />
        </div>
      ) : searchResults && searchResults?.articles?.length == 0 ? (
        <div className="searchresults__notfound">
          <img src={searchicon} className="searchresults__notfound-icon" />
          <p className="searchresults__notfound-text">Nothing Found</p>
          <p className="searchresults__notfound-desc">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchResults;
