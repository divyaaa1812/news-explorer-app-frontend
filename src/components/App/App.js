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
import * as api from "../../utils/MainApi";
import { nanoid } from "nanoid";
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
          const transformData = searchData.articles.map((item) => {
            return {
              key: nanoid(),
              ...item,
              isBookmarked: false,
            };
          });
          setSearchResults(transformData);
          setError(null);
          // Update local storage
          localStorage.setItem("searchResults", JSON.stringify(transformData));
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
    return api
      .registerUser({ username, email, password })
      .then(() => {
        handleOpenModal("SignupSuccessModal");
      })
      .catch(console.error);
  };

  const handleUserLogin = ({ email, password }) => {
    setLoading(true);
    return api
      .loginUser({ email, password })
      .then((res) => {
        const token = res.token;
        localStorage.setItem("jwt", token);
        return auth.verifyToken(token).then((user) => {
          setLoggedIn(true);
          setCurrentUser(user);
          handleCloseModal();
          history.push("/");
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

  const handleBookmarkClick = (selectedCard) => {
    // Map and create a new search results array
    const newCards = searchResults.map((card) => {
      return {
        ...card,
        isBookmarked:
          card.key === selectedCard.key
            ? !card.isBookmarked
            : card.isBookmarked,
      };
    });
    // either add or delete selectedCard based on selectedCard.isBookmarked field
    if (selectedCard.isBookmarked) {
      // delete the card in db
      api.removeCardBookmark(selectedCard);
      selectedCard.isBookmarked = false;
    } else {
      // add the card to db
      api.addCardBookmark(selectedCard);
    }
    localStorage.setItem("searchResults", JSON.stringify(newCards));
    // set state with new search results
    setSearchResults(newCards);
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
    async function getCurrentUser() {
      const jwt = localStorage.getItem("jwt");
      console.log(jwt);
      try {
        if (jwt) {
          const res = await auth.verifyToken(jwt);
          const data = await res.json();
          setLoggedIn(true);
          setCurrentUser(data);
        }
      } catch (err) {
        setLoggedIn(false);
        setCurrentUser({});
        history.push("/");
      }
    }
    // Read data from local storage when component mounts
    const storedSearchResults = localStorage.getItem("searchResults");
    if (storedSearchResults) {
      setSearchResults(JSON.parse(storedSearchResults));
    }
    getCurrentUser();
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
              handleBookmarkClick={handleBookmarkClick}
            />
          </Route>
          <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
            <SavedNewsHeader onLogout={handleLogout} />
            <SavedNews />
          </ProtectedRoute>
        </Switch>
        <Footer />
        {openModal === "SigninModal" && (
          <SigninModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            onUserLogin={handleUserLogin}
            isLoading={loading}
          />
        )}
        {openModal === "SignupModal" && (
          <SignupModal
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            onUserSignup={handleSignUp}
            isLoading={loading}
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
