import React from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Screen2 = () => {
  const [formData, setFormData] = useState();

  const handleFormChange = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    const fieldName = event.target.getAttribute("name");

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  // on submit
  const handleAddUser = (event) => {
    event.preventDefault();
    // localStorage.setItem(formData.userid, JSON.stringify(formData));
    axios
      .post("https://localhost:4000/user/addUser", formData)
      .then((response) => {
        console.log("YAY", response);
      })
      .catch((error) => {
        console.log("OH NO", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="userid"
          placeholder="User ID"
          required
          onChange={handleFormChange}
        ></input>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleFormChange}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleFormChange}
        ></input>
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleFormChange}
        ></input>
        <input
          type="date"
          name="doj"
          placeholder="Date of Joining"
          required
          onChange={handleFormChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Screen2;
