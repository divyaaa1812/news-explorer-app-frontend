// App.js
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SignupSuccessModal from "../SignupSuccessModal/SignupSuccessModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const pageSize = 1000;
  console.log(currentDate - 7);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  const handleSearchClick = (value) => {
    setLoading(true);
    setSearchResults([]);
    setError(null);
    setTimeout(() => {
      try {
        fetch(
          `https://newsapi.org/v2/everything?q=${value}&from=${
            currentDate - 7
          }&to=${currentDate}&apiKey=6cb3462c2b104837b32eef6da1aa7b60`
        )
          .then((res) => res.json())
          .then((searchData) => {
            setSearchResults(searchData);
            setError(null);
            // Update local storage
            localStorage.setItem("searchResults", JSON.stringify(searchData));
          });
      } catch (err) {
        console.log(err);
        setError(err);
        setSearchResults([]);
      } finally {
        setLoading(false); // Set loading to false when server response is received
      }
    }, 2000);
  };

  useEffect(() => {
    if (!openModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [openModal]);

  // useEffect(() => {
  //   console.log(value);
  //   if (!value) return;
  //   handleSearchClick(value);
  // }, [value]);

  // useEffect(() => {
  //   // Read data from local storage when component mounts
  //   const storedSearchResults = localStorage.getItem("searchResults");
  //   if (storedSearchResults) {
  //     setSearchResults(JSON.parse(storedSearchResults));
  //   }
  // }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header
            loggedIn={loggedIn}
            onOpenModal={handleOpenModal}
            onSearchClick={handleSearchClick}
          />
          <Main
            loggedIn={loggedIn}
            searchResults={searchResults}
            isLoading={loading}
            error={error}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
        </Route>
        <Route path="/signin">
          <SigninModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            isLoading={loading}
          />
        </Route>
        <Route path="/signup">
          <SignupModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            isLoading={loading}
          />
        </Route>
      </Switch>
      <Footer />
      {openModal === "SigninModal" && (
        <SigninModal
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
        />
      )}
      {openModal === "SignupModal" && (
        <SignupModal
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
        />
      )}
      {openModal === "SignupSuccessModal" && (
        <SignupSuccessModal
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
