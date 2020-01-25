import React, { Component } from "react";
import WheelsInspectionItem from "./WheelsInspectionItem";

export class WheelsInspection extends Component {
  state = {
    wheels: [
      { id: 49, name: "Lock/Side Ring", pass: false },
      { id: 50, name: "Wheels/Rims", pass: false },
      { id: 51, name: "Fasteners", pass: false },
      { id: 52, name: "Welds", pass: false }
    ]
  };
  render() {
    return this.state.wheels.map(item => (
      <WheelsInspectionItem item={item} key={item.id} />
    ));
  }
}

export default WheelsInspection;
