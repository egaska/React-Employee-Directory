import React from "react";
import moment from "moment";

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" onClick = {()=>{  props.handleSubmit("Name")  }}>Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.length > 0 ? (
          props.results.map((employee, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  <img src={employee.picture.thumbnail} alt = "Employee" />
                </th>
                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>
                  {moment(employee.dob.date, "YYYY-MM-DD").format("MM-DD-YYYY")}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
