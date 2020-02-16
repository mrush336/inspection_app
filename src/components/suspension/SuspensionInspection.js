import React, { Component } from "react";
import SuspensionInspectionItem from "./SuspensionInspectionItem";

export class SuspensionInspection extends Component {
  state = {
    suspension: [
      { id: 40, name: "U-Bolts And Spring Hangers", pass: false },
      { id: 41, name: "Spring Assembly", pass: false },
      { id: 42, name: "Torque And Radius Rods", pass: false }
    ]
  };
  render() {
    return this.state.suspension.map(item => (
      <SuspensionInspectionItem item={item} key={item.id} />
    ));
  }
}

export default SuspensionInspection;
