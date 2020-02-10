import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={mainHeaderStyle}>
      <Link to="/">Home</Link> <Link to="/brakes">Brakes-Inspection </Link>{" "}
      <Link to="/coupling">Coupling-Devices</Link>{" "}
      <Link to="/exhaust">Exhaust-Inspection</Link>{" "}
      <Link to="/fuel">Fuel System-Inspection</Link>{" "}
      <Link to="/lighting">Lights and Reflectors</Link>{" "}
      <Link to="/loading">Loading and Securement</Link>{" "}
      <Link to="/steering">Steering System-Inspection</Link>{" "}
      <Link to="/suspension">Suspension System-Inspection</Link>{" "}
      <Link to="/frame">Frame-Inspection</Link>{" "}
      <Link to="/tires">Tires-Inspection</Link>{" "}
      <Link to="/wheels">Wheels-Inspection</Link>{" "}
      <Link to="/windshield">Windshield-Inspection</Link>{" "}
      <Link to="/wipers">Wipers-Inspection</Link>{" "}
      <Link to="/seats">Motorcoach Seats-Inspection</Link>{" "}
    </header>
  );
}

const mainHeaderStyle = {
  background: "#99ccff",
  fontSize: "20px",
  color: "#000066",
  textDecoration: "none"
};
