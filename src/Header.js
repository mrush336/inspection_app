import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>DOT Inspection Procedures</h1>
    </header>
  );
}

const headerStyle = {
  background: "#99ccff",
  fontSize: "24px"
};

export default Header;
