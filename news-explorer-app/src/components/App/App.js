// App.js
import React, { useState } from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
