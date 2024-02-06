// App.js
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
