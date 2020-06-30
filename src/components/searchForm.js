import React from "react";

export default function SearchForm(props) {

  return (
    <div className="searchArea">
        <div className="input-group"></div>
        <input
          name="search"
          type="search"
          className="form-control"
          id="searchInput"
          placeholder="Search"
          onChange={props.handleInputChange}
        />
        {console.log(props.search)}
      </div>
  );
}
