import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={footerStyle} className={"footer"}>
      <h2>When complete click Next or Back</h2>
      <Link to="/wheels" style={footerLinkStyle}>
        Back
      </Link>{" "}
      <Link to="/wipers" style={footerLinkStyle}>
        Next
      </Link>
    </footer>
  );
}

const footerStyle = {
  background: "#99ccff",
  color: "#000000"
};

const footerLinkStyle = {
  margin: "2rem 3rem",
  fontSize: "2rem"
};
