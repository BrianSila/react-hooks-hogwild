import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hogcard from "./Hogcard";
import HogForm from "./HogForm";

function App() {
  const [showDetails, setShowDetails] = useState(null);
  const [ShowGreased, setShowGreased] = useState(false);
  const [SortBy, setSortBy] = useState("none");
  const [ShowForm, setShowForm] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    speciality: "",
    greased: false,
    weight: "",
    image: "",
  });
  const [hogList, setHogList] = useState(hogs);

  function handleshow(hogName) {
    setShowDetails((prevName) => (prevName === hogName ? null : hogName));
  }

  const filteredhogs = ShowGreased
    ? hogList.filter((hog) => hog.greased)
    : hogList;

  const sortedHogs = [...filteredhogs].sort((a, b) => {
    if (SortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (SortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  function handleclick() {
    setShowForm(!ShowForm);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...FormData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHogList([...hogList, FormData]);
    setFormData({
      name: "",
      speciality: "",
      greased: false,
      weight: "",
      image: "",
    });
  }

  return (
    <div className="App">
      <Nav handleShowform={handleclick} />
      {ShowForm && (
        <HogForm
          FormData={FormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
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
      <Hogcard
        hogs={sortedHogs}
        handleshow={handleshow}
        showDetails={showDetails}
      />
    </div>
  );
}

export default App;
