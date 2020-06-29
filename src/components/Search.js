import React, { useState, useEffect } from "react";
import API from "../utils/api";
import SearchForm from "./searchForm";
import Table from "./table";

export function Search() {
  //stores the search input

  const [state, setState] = useState({
    results: [],
    originalArray: [],
  });

  const handleSearch = event => {
    const filter = event.target.value;
    const results = state.users.filter(result => {
      let entry = result.name.first.toLowerCase() + " " + result.name.last.toLowerCase();
      console.log(filter, entry)
    if(entry.indexOf(filter.toLowerCase()) !== -1){
      return result
    };
    });
    setState({...state, results: results});
  }
  
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


  const [search, setSearch] = useState("");
  return (
    <>
    {console.log(state.results)}
      <SearchForm />
      <Table results = {state.results}/>
    </>
  );
}
