import React, { Component } from "react";
import LightingInspectionItem from "./LightingInspectionItem";

export class LightingInspection extends Component {
  state = {
    lighting: [{ id: 26, name: "All Lighting Devices", pass: false }]
  };
  render() {
    return this.state.lighting.map(item => (
      <LightingInspectionItem item={item} key={item.id} />
    ));
  }
}

export default LightingInspection;
