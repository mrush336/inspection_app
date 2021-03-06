import React from "react";

function WindshieldHeader() {
  return (
    <header style={headerStyle} className={"header"}>
      <h1>Windshield Inspection</h1>
      <h2>Inspect components and click PASS, FAIL, or Not Applicable</h2>
    </header>
  );
}

const headerStyle = {
  background: "#99ccff"
};

export default WindshieldHeader;
