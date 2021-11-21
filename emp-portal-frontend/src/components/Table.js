import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [arr, updateArr] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:4000/user/allUser")
      .then((dataFromBackend) => {
        if (dataFromBackend) {
          updateArr(dataFromBackend.data);
        }
      })
      .catch((error) => {
        console.log("OH NO", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
          {arr.length > 0 ? (
            arr.map((ele) => {
              if (ele !== null && ele !== "") {
                const items = ele;
                return (
                  <tr>
                    <td key="userid">{items.userid} </td>
                    <td key="name">{items.name} </td>
                    <td key="email">{items.email} </td>
                    <td key="address">{items.address} </td>
                    <td key="doj">{items.doj}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// // Table component
// const Table = () => {
//   let arr = [];
//   for (var i = 0; i <= localStorage.length; i++) {
//     var a = localStorage.key(i);
//     arr.push(localStorage.getItem(a));
//   }
