import React, { Component } from "react";
import SuspensionInspectionItem from "./SuspensionInspectionItem";

export class SuspensionInspection extends Component {
  render() {
    return this.props.suspension.map(item => (
      <SuspensionInspectionItem item={item} key={item.id} />
    ));
  }
}

export default SuspensionInspection;
