// App.js
import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [openModal, setOpenModal] = useState("");

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  useEffect(() => {
    if (!openModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    const handleClickOutside = (e) => {
      if (e.target === e.currentTarget) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} onOpenModal={handleOpenModal} />
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews />
        </Route>
        <Route exact path="/signin">
          <SigninModal onOpenModal={handleOpenModal} />
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
    </div>
  );
}

export default App;
