import React from "react";

// Table component
const Table = () => {
  let arr = [];
  for (var i = 0; i <= localStorage.length; i++) {
    var a = localStorage.key(i);
    arr.push(localStorage.getItem(a));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th key="userid">UserID </th>
            <th key="name">Name </th>
            <th key="email">Email </th>
            <th key="address">Address </th>
            <th key="doj">Joining Date </th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele) => {
            if (ele !== null && ele !== "") {
              const items = JSON.parse(ele);
              return (
                <tr>
                  <td>{items.userid} </td>
                  <td>{items.name} </td>
                  <td>{items.email} </td>
                  <td>{items.address} </td>
                  <td>{items.doj}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
