import React, { useState } from "react";
import "./DependentDropdown.css";
const data = {
  Bangladesh: {
    Dhaka: ["Dhanmondi", "Gulshan", "Mirpur"],
    Chattogram: ["Pahartali", "Agrabad", "Kotwali"],
  },
  India: {
    WestBengal: ["Kolkata", "Howrah", "Siliguri"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  },
  USA: {
    California: ["Los Angeles", "San Diego", "San Francisco"],
    Texas: ["Houston", "Dallas", "Austin"],
  },
};

function DependentDropdown() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Country: ${country}, State: ${state}, City: ${city}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Country */}
      <label>
        Country:
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setState("");
            setCity("");
          }}
        >
          <option value="">--Select Country--</option>
          {Object.keys(data).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <br />

      {/* State */}
      <label>
        State:
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity("");
          }}
          disabled={!country}
        >
          <option value="">--Select State--</option>
          {country &&
            Object.keys(data[country]).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
        </select>
      </label>
      <br />

      {/* City */}
      <label>
        City:
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!state}
        >
          <option value="">--Select City--</option>
          {state &&
            data[country][state].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default DependentDropdown;
