import React, { Component } from "react";
import WindshieldInspectionItem from "./WindshieldInspectionItem";

export class WindshieldInspection extends Component {
  render() {
    return this.props.windshield.map(item => (
      <WindshieldInspectionItem item={item} key={item.id} />
    ));
  }
}

export default WindshieldInspection;
