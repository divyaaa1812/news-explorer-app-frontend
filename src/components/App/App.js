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
import { getSearchResults } from "../../utils/Api";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [openModal, setOpenModal] = useState("");
  const [openSucessModal, setOpenSucessModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const pageSize = 100;
  const currentDate = new Date();
  const pastDate = new Date();
  pastDate.setDate(currentDate.getDate() - 7);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0]; // Format date to 'YYYY-MM-DD'
  };

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
    setOpenSucessModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  const handleSearchClick = (value) => {
    setLoading(true);
    setSearchResults([]);
    setError(null);
    setTimeout(() => {
      getSearchResults(value)
        .then((searchData) => {
          console.log(searchData);
          setSearchResults(searchData);
          setError(null);
          // Update local storage
          localStorage.setItem("searchResults", JSON.stringify(searchData));
        })
        .catch((err) => {
          setError(err);
          setSearchResults([]);
        })
        .finally(() => {
          setLoading(false); // Set loading to false when server response is received
        });
    }, 2000);
  };

  useEffect(() => {
    //if (!openModal) return;
    // const handleEscClose = (e) => {
    //   if (e.key === "Escape") {
    //     handleCloseModal();
    //   }
    // };
    // document.addEventListener("keydown", handleEscClose);
    // return () => {
    //   document.removeEventListener("keydown", handleEscClose);
    // };
    console.log(openModal);
  }, [openModal]);

  useEffect(() => {
    // Read data from local storage when component mounts
    const storedSearchResults = localStorage.getItem("searchResults");
    if (storedSearchResults) {
      setSearchResults(JSON.parse(storedSearchResults));
    }
  }, []);

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
