import React from "react";
import LinkButton from "../LinkButton";

export default function Footer() {
  return (
    <footer style={footerStyle} className={"footer"}>
      <h2>When complete click continue or go-back</h2>
      <LinkButton to="/coupling" style={buttonStyleContinue}>
        CONTINUE
      </LinkButton>{" "}
      <LinkButton to="/" style={buttonStyleBack}>
        GO-BACK
      </LinkButton>
    </footer>
  );
}

const footerStyle = {
  background: "#99ccff",
  color: "#000000"
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
