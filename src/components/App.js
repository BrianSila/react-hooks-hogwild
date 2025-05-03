import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hogcard from "./Hogcard";

function App() {
  const [showDetails, setShowDetails] = useState(null);

  function handleshow(hogName) {
    setShowDetails((prevName) => (prevName === hogName ? null : hogName));
  }

  return (
    <div className="App">
      <Nav />
      <Hogcard hogs={hogs} handleshow={handleshow} showDetails={showDetails} />
    </div>
  );
}

export default App;
