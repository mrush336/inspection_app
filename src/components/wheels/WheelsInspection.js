import React, { Component } from "react";
import WheelsInspectionItem from "./WheelsInspectionItem";

export class WheelsInspection extends Component {
  render() {
    return this.props.wheels.map(item => (
      <WheelsInspectionItem item={item} key={item.id} />
    ));
  }
}

export default WheelsInspection;
