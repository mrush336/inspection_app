import React from "react";

function BrakesHeader() {
  return (
    <header style={headerStyle} className={"header"}>
      <h1>Brake Inspection</h1>
      <h2>Inspect components and click PASS, FAIL, or Not Applicable</h2>
      <h3>When complete click continue at the bottom of the page</h3>
    </header>
  );
}

const headerStyle = {
  background: "#99ccff"
};

export default BrakesHeader;
