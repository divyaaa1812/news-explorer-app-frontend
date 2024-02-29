import "./Main.css";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({ loggedIn, searchResults, isLoading, error }) => {
  return (
    <main className="main">
      <SearchResults
        loggedIn={loggedIn}
        searchResults={searchResults}
        isLoading={isLoading}
        error={error}
      />
      <About />
    </main>
  );
};

export default Main;
