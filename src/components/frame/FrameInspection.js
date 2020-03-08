import React, { Component } from "react";
import FrameInspectionItem from "./FrameInspectionItem";

export class FrameInspection extends Component {
  render() {
    return this.props.frame.map(item => (
      <FrameInspectionItem item={item} key={item.id} />
    ));
  }
}

export default FrameInspection;
