import React, { Component } from "react";
import SteeringInspectionItem from "./SteeringInspectionItem";

export class SteeringInspection extends Component {
  render() {
    return this.props.steering.map(item => (
      <SteeringInspectionItem item={item} key={item.id} />
    ));
  }
}

export default SteeringInspection;
