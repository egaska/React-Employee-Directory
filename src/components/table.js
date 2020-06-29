import React from "react";
import moment from "moment";


export default function Table(props) {

    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
      {props.results.length > 0 ? props.results.map((employee,index)=> {
          return(
    <tr>
      <th scope="row"><img src = {employee.picture.thumbnail} /></th>
          <td>{employee.name.first + " " + employee.name.last}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{moment(employee.dob.date, "YYYY-MM-DD").format("MM-DD-YYYY") }</td>
    </tr>
          )
      }):""}
  </tbody>
</table>
    )
}