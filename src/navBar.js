import React from "react";
import "./index.css";
import "./Home.js";
function NavBar() {
  return (
    <div className="header-container">
      <h2 className="logoContainer">Logo</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Service</li>
        <li>Gallery</li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
    
  );
}

export default NavBar;
