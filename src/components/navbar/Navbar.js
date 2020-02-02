import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={mainHeaderStyle}>
      <Link to="/">Home</Link> <Link to="/brakes">Brakes-Inspection </Link>{" "}
      <Link to="/coupling">Coupling-Devices</Link>{" "}
      <Link to="/exhaust">Exhaust-Inspection</Link>{" "}
    </header>
  );
}

const mainHeaderStyle = {
  background: "#99ccff",
  fontSize: "20px",
  color: "#000066"
};
