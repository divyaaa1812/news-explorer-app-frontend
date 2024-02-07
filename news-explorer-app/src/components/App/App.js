// App.js
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
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
