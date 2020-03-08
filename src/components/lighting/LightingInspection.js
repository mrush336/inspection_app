import React, { Component } from "react";
import LightingInspectionItem from "./LightingInspectionItem";

export class LightingInspection extends Component {
  render() {
    return this.props.lighting.map(item => (
      <LightingInspectionItem item={item} key={item.id} />
    ));
  }
}

export default LightingInspection;
