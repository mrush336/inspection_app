import React, { Component } from "react";
import SteeringInspectionItem from "./SteeringInspectionItem";

export class SteeringInspection extends Component {
  state = {
    steering: [
      { id: 30, name: "Steering Wheel Freeplay", pass: false },
      { id: 31, name: "Steering Column", pass: false },
      { id: 32, name: "Axle Beam/Components", pass: false },
      { id: 33, name: "Steering Gear Box", pass: false },
      { id: 34, name: "Pitman Arm", pass: false },
      { id: 35, name: "Power Steering", pass: false },
      { id: 36, name: "Ball Joints", pass: false },
      { id: 37, name: "Tie Rod/Drag Link", pass: false },
      { id: 38, name: "Nuts", pass: false },
      { id: 39, name: "Steering System", pass: false }
    ]
  };
  render() {
    return this.state.steering.map(item => (
      <SteeringInspectionItem item={item} key={item.id} />
    ));
  }
}

export default SteeringInspection;
