import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {


  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

function SearchName() {
  return (
    <div className="searchArea">
      <div className="input-group">
        <span>Search</span>
      </div>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        placeholder="Search"
        onChange = {}
      
      />
    </div>
  );
}

export default App;
