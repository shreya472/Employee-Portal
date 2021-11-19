import React from "react";
import { useState } from "react/cjs/react.development";

const Screen3 = () => {
  const [id, setId] = useState();

  // on submit
  const handleRemoveUser = (event) => {
    localStorage.removeItem(id);
  };

  return (
    <div>
      <form onSubmit={handleRemoveUser}>
        <input
          type="text"
          name="userid"
          placeholder="User ID"
          onChange={(event) => setId(event.target.value)}
        ></input>
        <button type="submit">Remove User</button>
      </form>
    </div>
  );
};

export default Screen3;
