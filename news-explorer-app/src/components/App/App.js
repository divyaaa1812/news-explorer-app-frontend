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
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SignupSuccessModal from "../SignupSuccessModal/SignupSuccessModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
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
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [openModal]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn} onOpenModal={handleOpenModal} />
          <Main loggedIn={loggedIn} />
        </Route>
        <Route exact path="/saved-news">
          <SavedNewsHeader />
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
