import React, { Component } from "react";
import InspectionItem from "./InspectionItem";

export class Inspection extends Component {
  render() {
    return this.props.inspections.map(item => (
      <InspectionItem item={item} key={item.id} />
    ));
  }
}

export default Inspection;
