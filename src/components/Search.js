import React, { useState, useEffect } from "react";
import API from "../utils/api";
import SearchForm from "./searchForm";
import Table from "./table";

let sortToggle = true;
let newResults = "";

export function Search() {
  const [state, setState] = useState({
    results: [],
    originalArray: [],
    search: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);

    const newResults = state.originalArray.filter((employee) => {
      return (
        employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(value.toLowerCase()) ||
        employee.phone.includes(value) ||
        employee.email.includes(value)
      );
    });

    setState({
      ...state,
      results: newResults,
    });
  };
  const handleSort = (columnName) => {
    switch (columnName) {
      case "Name":
        if (sortToggle === true){
        newResults = state.results.sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
      sortToggle = false;
      }
      else{
        newResults = state.results.sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      );
      sortToggle = true;
      }
        setState({
          ...state,
          results: newResults,
        });
        break;
    }
  };

  useEffect(() => {
    API.getEmployee().then((employees) => {
      setState({
        ...state,
        results: employees.data.results,
        originalArray: employees.data.results,
      });
    });
  }, []);

  return (
    <>
      <SearchForm handleInputChange={handleInputChange} search={state.search} />
      <Table results={state.results} handleSort={handleSort} sortToggle = {sortToggle}/>
    </>
  );
}
