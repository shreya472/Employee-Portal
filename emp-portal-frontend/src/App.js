import React, { useState } from "react";
import "./App.css";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Table from "./components/Table";

// using switch case to render different screen
function App() {
  const [change, setChange] = useState("screen1");
  switch (change) {
    case "screen1":
      return (
        <div>
          <button onClick={() => setChange("screen2")}>Add User</button>
          <button onClick={() => setChange("screen3")}>Remove User</button>
          <Table />
        </div>
      );

    case "screen2":
      return <Screen2 />;

    case "screen3":
      return <Screen3 />;

    default:
      break;
  }
}

export default App;
