import React from "react";
import { useState } from "react";
import MockData from "../MOCK_DATA.json";
const Searching = () => {
  const [setdata, update] = useState("");
  const Data = MockData.filter((a) => {
    if (setdata === "") {
      return a;
    } else if (a.first_name.toLocaleLowerCase().includes(setdata)) {
      return a;
    }
  }).map((a) => {
    return (
      <tr>
        <td>{a.id}</td>
        <td>{a.first_name}</td>
        <td>{a.email}</td>
        <td>{a.gender}</td>
        <td>{a.phone_number}</td>
        <td>{a.dob}</td>.
      </tr>
    );
  });
  return (
    <div className="container">
      <input
        className="form-control"
        type="text"
        placeholder="Serch Here"
        onChange={(e) => update(e.target.value)}
      />
      <table className="table table-borderd">
        <thead className="thead-dark">
          <tr>
            <th>Id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>D.O.B</th>
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </div>
  );
};
export default Searching;
