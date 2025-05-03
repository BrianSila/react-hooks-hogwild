import React from "react";

function HogForm({ FormData, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={FormData.weight}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Greased:
        <input
          type="checkbox"
          name="greased"
          checked={FormData.greased}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Highest Medal Achieved:
        <input
          type="text"
          name="highestMedal"
          value={FormData.highestMedal}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={FormData.image}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HogForm;
