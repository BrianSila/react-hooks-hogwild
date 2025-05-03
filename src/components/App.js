import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hogcard from "./Hogcard";

function App() {
  const [showDetails, setShowDetails] = useState(null);
  const [ShowGreased, setShowGreased] = useState(false);
  const [SortBy, setSortBy] = useState("none");

  function handleshow(hogName) {
    setShowDetails((prevName) => (prevName === hogName ? null : hogName));
  }

  const filteredhogs = ShowGreased ? hogs.filter((hog) => hog.greased) : hogs;

  const sortedHogs = [...filteredhogs].sort((a, b) => {
    if (SortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (SortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="App">
      <Nav />
      <Hogcard
        hogs={sortedHogs}
        handleshow={handleshow}
        showDetails={showDetails}
      />
      <label>
        Show Greased Hogs Only:
        <input
          type="checkbox"
          checked={ShowGreased}
          onChange={() => setShowGreased(!ShowGreased)}
        />
      </label>
      <label>
        Sort by:
        <select value={SortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default App;
