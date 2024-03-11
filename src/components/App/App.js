// App.js
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext ";
import ProtectedRoute from "../ProtectedRoute";
import * as auth from "../../utils/Auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const currentDate = new Date();
  const pastDate = new Date();
  pastDate.setDate(currentDate.getDate() - 7);
  // to access browser stored content of a webpage for functional components
  const history = useHistory();

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

  const handleSignUp = ({ username, email, password }) => {
    return auth
      .registerUser({ username, email, password })
      .then(() => {
        handleOpenModal("SignupSuccessModal");
      })
      .catch(console.error);
  };

  const handleUserLogin = ({ email, password }) => {
    setLoading(true);
    return auth
      .loginUser({ email, password })
      .then((res) => {
        const token = res.token;
        localStorage.setItem("jwt", token);
        return auth.verifyToken(token).then((user) => {
          setLoggedIn(true);
          setCurrentUser(user);
          handleCloseModal();
          history.push("/saved-news");
        });
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
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

  useEffect(() => {
    // Read data from local storage when component mounts
    const storedSearchResults = localStorage.getItem("searchResults");
    if (storedSearchResults) {
      setSearchResults(JSON.parse(storedSearchResults));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, loggedIn }}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
              onOpenModal={handleOpenModal}
              onSearchClick={handleSearchClick}
              onLogout={handleLogout}
            />
            <Main
              loggedIn={loggedIn}
              searchResults={searchResults}
              isLoading={loading}
              error={error}
            />
          </Route>
          <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
            <SavedNewsHeader onLogout={handleLogout} />
            <SavedNews />
          </ProtectedRoute>
          {/* <Route path="/signin">
            <SigninModal
              onOpenModal={handleOpenModal}
              onCloseModal={handleCloseModal}
              isLoading={loading}
              onUserLogin={handleUserLogin}
            />
          </Route>
          <Route path="/signup">
            <SignupModal
              onOpenModal={handleOpenModal}
              onCloseModal={handleCloseModal}
              isLoading={loading}
            />
          </Route> */}
        </Switch>
        <Footer />
        {openModal === "SigninModal" && (
          <SigninModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            onUserLogin={handleUserLogin}
          />
        )}
        {openModal === "SignupModal" && (
          <SignupModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            onUserSignup={handleSignUp}
          />
        )}
        {openModal === "SignupSuccessModal" && (
          <SignupSuccessModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
