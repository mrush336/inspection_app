import React from "react";
import LinkButton from "../LinkButton";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <h2>
        After inspecting the components above click to "continue" or "go-back"
      </h2>
      <LinkButton to="/" style={buttonStyleContinue}>
        continue
      </LinkButton>{" "}
      <LinkButton style={buttonStyleBack}>go-back</LinkButton>
    </footer>
  );
}

const footerStyle = {
  background: "#99ccff",
  color: "#000066"
};

const buttonStyleContinue = {
  backgroundColor: "#00ff00",
  borderRadius: "20px",
  fontSize: "20px"
};

const buttonStyleBack = {
  backgroundColor: "#ff0000",
  borderRadius: "20px",
  fontSize: "20px"
};
