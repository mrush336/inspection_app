import React, { Component } from "react";
import WindshieldInspectionItem from "./WindshieldInspectionItem";

export class WindshieldInspection extends Component {
  state = {
    windshield: [{ id: 53, name: "Vision Reducing Matter", pass: false }]
  };
  render() {
    return this.state.windshield.map(item => (
      <WindshieldInspectionItem item={item} key={item.id} />
    ));
  }
}

export default WindshieldInspection;
