import React from "react";

export default function FormHeader() {
  return (
    <header style={headerStyle}>
      <h2>Enter the required information below</h2>
    </header>
  );
}

const headerStyle = {
  background: "#99ccff",
  color: "#ff0000"
};
