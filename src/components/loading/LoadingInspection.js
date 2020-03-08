import React, { Component } from "react";
import LoadingInspectionItem from "./LoadingInspectionItem";

export class LoadingInspection extends Component {
  render() {
    return this.props.loading.map(item => (
      <LoadingInspectionItem item={item} key={item.id} />
    ));
  }
}

export default LoadingInspection;
