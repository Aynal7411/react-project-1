import React, { useState } from "react";

function SelectExample() {
  const [fruit, setFruit] = useState("apple");

  const handleChange = (event) => {
    setFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You selected: " + fruit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose a fruit:{" "}
        <select value={fruit} onChange={handleChange}>
          <option value="apple">Apple</option>
          <option value="mango">Mango</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SelectExample;
