import React from "react";

const NavBar = props => (
  <div className="nav">
    <ul>
      <li className="nav-options">
        <a href="about.asp">Contact</a>
      </li>
      <li className="nav-options">
        <a href="about.asp">Portfolio</a>
      </li>
      <li className="nav-options">
        <a href="contact.asp">Resume</a>
      </li>
      <li className="nav-options">
        <a href="news.asp">About</a>
      </li>
      <li className="nav-home">
        <a href="default.asp">Alex Berman's Dev Portfolio</a>
      </li>
    </ul>
  </div>
);

export default NavBar;
