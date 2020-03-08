import React, { Component } from "react";
import TiresInspectionItem from "./TiresInspectionItem";

export class TiresInspection extends Component {
  render() {
    return this.props.tires.map(item => (
      <TiresInspectionItem item={item} key={item.id} />
    ));
  }
}

export default TiresInspection;
