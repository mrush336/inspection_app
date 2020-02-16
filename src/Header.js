import React from "react";
//import {Link} from "react-router-dom":

function Header() {
  return (
    <header style={mainHeaderStyle}>
      <h1>DOT INSPECTION PROCEDURES</h1>
    </header>
  );
}

const mainHeaderStyle = {
  background: "#99ccff",
  fontSize: "1.5rem",
  color: "#000066",
  textShadow: "2px 2px #ff0000"
};

export default Header;
