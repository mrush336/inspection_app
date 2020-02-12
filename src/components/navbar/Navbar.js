import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={mainHeaderStyle}>
      <Link to="/">Home</Link> <Link to="/brakes">Brakes</Link>{" "}
      <Link to="/coupling">Coupling-Devices</Link>{" "}
      <Link to="/exhaust">Exhaust</Link> <Link to="/fuel">Fuel System</Link>{" "}
      <Link to="/lighting">Lights and Reflectors</Link>{" "}
      <Link to="/loading">Loading and Securement</Link>{" "}
      <Link to="/steering">Steering System</Link>{" "}
      <Link to="/suspension">Suspension System</Link>{" "}
      <Link to="/frame">Frame</Link> <Link to="/tires">Tires</Link>{" "}
      <Link to="/wheels">Wheels</Link> <Link to="/windshield">Windshield</Link>{" "}
      <Link to="/wipers">Wipers</Link> <Link to="/seats">Motorcoach Seats</Link>{" "}
    </header>
  );
}

const mainHeaderStyle = {
  background: "#99ccff",
  fontSize: "20px",
  color: "#000066",
  textDecoration: "none"
};
