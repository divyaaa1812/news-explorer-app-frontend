import React, { useState, useEffect } from "react";
import "./SearchComponent.css"; // Import your CSS file for styling

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleResults, setVisibleResults] = useState(3);

  useEffect(() => {
    // Read data from local storage when component mounts
    const storedSearchResults = localStorage.getItem("searchResults");
    if (storedSearchResults) {
      setSearchResults(JSON.parse(storedSearchResults));
    }
  }, []); // Empty dependency array to mimic component mount

  useEffect(() => {
    // Fetch data and update searchResults when searchQuery changes
    if (searchQuery) {
      setLoading(true);
      setError(null); // Reset error state
      // Simulating API call with setTimeout
      const fetchData = async () => {
        try {
          // Replace this with your actual API call
          const data = await fetch(`YOUR_API_ENDPOINT?q=${searchQuery}`);
          if (!data.ok) {
            throw new Error("Network response was not ok");
          }
          const jsonData = await data.json();
          setSearchResults(jsonData);
          // Update local storage
          localStorage.setItem("searchResults", JSON.stringify(jsonData));
        } catch (error) {
          setError(
            "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
          );
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [searchQuery]);

  const handleShowMore = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 3);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : searchResults.length > 0 ? (
        <div className="results">
          <h2>Search Results:</h2>
          <div className="cards">
            {searchResults.slice(0, visibleResults).map((result) => (
              <div key={result.id} className="card">
                {/* Render your search result cards here */}
                {/* Example: <p>{result.title}</p> */}
              </div>
            ))}
          </div>
          {visibleResults < searchResults.length && (
            <button onClick={handleShowMore}>Show more</button>
          )}
        </div>
      ) : (
        <div>Nothing found</div>
      )}
    </div>
  );
}

export default SearchComponent;
