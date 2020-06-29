import React from "react";

export default function SearchForm() {
  return (
    <div className="searchArea">
      <div className="input-group"></div>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        placeholder="Search"
      />
    </div>
  );
}
