// App.js
import React, { useState } from "react";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SigninModal from "../SigninModal/SigninModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState("");

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

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
        <SigninModal onOpenModal={handleOpenModal} />
      )}
    </div>
  );
}

export default App;
