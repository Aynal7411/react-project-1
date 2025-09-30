import React, { useState } from "react";
import "./Navbar.css"; // আলাদা CSS ফাইল ব্যবহার করব

export default function Navbar() {
  // State for search
  const [search, setSearch] = useState("");

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${search}`); // এখানে তুমি API call বা filter করতে পারবে
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          LawLiet
        </a>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li><a href="#contacts">CONTACTS</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#terms">TERMS</a></li>
        </ul>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </nav>
  );
}
