import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={mainHeaderStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>{" "}
      <Link to="/brakes" style={linkStyle}>
        Brakes
      </Link>{" "}
      <Link to="/coupling" style={linkStyle}>
        Coupling-Devices
      </Link>{" "}
      <Link to="/exhaust" style={linkStyle}>
        Exhaust
      </Link>{" "}
      <Link to="/fuel" style={linkStyle}>
        Fuel System
      </Link>{" "}
      <Link to="/lighting" style={linkStyle}>
        Lights and Reflectors
      </Link>{" "}
      <Link to="/loading" style={linkStyle}>
        Loading and Securement
      </Link>{" "}
      <Link to="/steering" style={linkStyle}>
        Steering System
      </Link>{" "}
      <Link to="/suspension" style={linkStyle}>
        Suspension
      </Link>{" "}
      <Link to="/frame" style={linkStyle}>
        Frame
      </Link>{" "}
      <Link to="/tires">Tires</Link>{" "}
      <Link to="/wheels" style={linkStyle}>
        Wheels
      </Link>{" "}
      <Link to="/windshield" style={linkStyle}>
        Windshield
      </Link>{" "}
      <Link to="/wipers" style={linkStyle}>
        Wipers
      </Link>{" "}
      <Link to="/seats" style={linkStyle}>
        Seats
      </Link>{" "}
      <Link to="/summary" style={linkStyle}>
        Summary
      </Link>{" "}
    </header>
  );
}

const mainHeaderStyle = {
  background: "#99ccff",
  fontSize: "1.25rem",
  color: "#000066",
  textDecoration: "none"
};

const linkStyle = {
  margin: "0 1rem"
};
