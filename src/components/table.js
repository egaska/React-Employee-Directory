import React from "react";
import moment from "moment";

export default function Table(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th
            scope="col"
            onClick={() => {
              props.handleSort("Name");
            }}
          >
            Name{" "}
            <img
              src="https://img.icons8.com/material-outlined/24/000000/filter-and-sort.png"
              alt="Sort"
            />
          </th>
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
                  <img src={employee.picture.thumbnail} alt="Employee" />
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
