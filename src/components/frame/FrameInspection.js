import React, { Component } from "react";

export class FrameInspection extends Component {
  state = {
    frame: [
      { id: 42, name: "Frame Members", pass: false },
      { id: 44, name: "Tire and Wheel Clearance", pass: false },
      { id: 45, name: "Sliding Subframes", pass: false }
    ]
  };
  render() {
    return this.state.frame.map(item => (
      <FrameInspectionItem item={item} key={item.id} />
    ));
  }
}

export default FrameInspection;
