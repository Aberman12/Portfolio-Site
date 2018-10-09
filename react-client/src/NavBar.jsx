import React from "react";

const NavBar = props => (
  <div className="nav">
    <ul className="ul">
      <li className="nav-options last">
        <a onClick={() => props.contact()}>Contact</a>
      </li>
      <li className="nav-options">
        <a onClick={() => props.resumeProjectClick()}>Resume/Portfolio</a>
      </li>
      <li className="nav-options">
        <a onClick={() => props.about()}>About</a>
      </li>
      <li className="nav-home first">
        <a>Alex Berman</a>
      </li>
    </ul>
  </div>
);

export default NavBar;
