import React, { Component } from "react";
import CouplingInspectionItem from "./CouplingInspectionItem";

export class CouplingInspection extends Component {
  state = {
    coupling: [
      { id: 14, name: "Fifth Wheels", pass: false },
      { id: 15, name: "Pintle Hooks", pass: false },
      { id: 16, name: "Drawbar/Towbar Eye", pass: false },
      { id: 17, name: "Drawbar/Towbar Tongue", pass: false },
      { id: 18, name: "Safety Devices", pass: false },
      { id: 19, name: "Saddle Mounts", pass: false }
    ]
  };
  render() {
    return this.state.coupling.map(item => (
      <CouplingInspectionItem item={item} key={item.id} />
    ));
  }
}

export default CouplingInspection;
