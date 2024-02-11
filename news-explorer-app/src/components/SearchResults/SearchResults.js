import NewsCard from "../NewsCard/NewsCard";
import "./SearchResults.css";

const SearchResults = ({ loggedIn, searchResults }) => {
  return (
    <div className="searchresult__container">
      <h3 className="searchresults__title"> Search results</h3>
      <NewsCard loggedIn={loggedIn} searchResults={searchResults} />
    </div>
  );
};

export default SearchResults;
