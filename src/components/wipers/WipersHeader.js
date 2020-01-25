import React from "react";

function WipersHeader() {
  return (
    <header style={headerStyle} className={"header"}>
      <h1>Wipers Inspection</h1>
      <h2>Inspect components and click PASS, FAIL, or NOT APPLICABLE</h2>
    </header>
  );
}

const headerStyle = {
  background: "#99ccff"
};

export default WipersHeader;
