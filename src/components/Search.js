import React, { useState, useEffect } from "react";
import API from "../utils/api";
import SeachForm from "./searchForm";
import Table from "./table";

export function Search() {
  //stores the search input

  const [state, setState] = useState({
    results: [],
    originalArray: [],
  });

  useEffect(()=>{
    API.getEmployee().then(employees => {
      console.log(employees)

      setState({
        ...state, 
        results: employees.data.results,
        originalArray: employees.data.results
      })
    })

  },[])

  function sortByName(){
    let orderedEmployees = state.results.sort();
    setEmployeeOrder([orderedEmployees)
  }

  const [search, setSearch] = useState("");
  return (
    <>
    {console.log(state.results)}
      <SeachForm />
      <Table results = {state.results}/>
    </>
  );
}
