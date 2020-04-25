import React, { Component } from "react";

export class SteeringInspectionItem extends Component {
  state = {
    divStyle: {
      backgroundColor: "#ffffff"
    }
  };
  handleClickPass = () => {
    this.setState({
      divStyle: {
        backgroundColor: "#00ff00"
      }
    });
    this.props.item.pass = "Passed";
  };
  handleClickFail = () => {
    this.setState({
      divStyle: {
        backgroundColor: "#ff0000"
      }
    });
    this.props.item.pass = "Failed";
  };
  handleClickNA = () => {
    this.setState({
      divStyle: {
        backgroundColor: "#ffff00"
      }
    });
    this.props.item.pass = "Not Applicable";
  };
  render() {
    const { divStyle } = this.state;
    return (
      <div>
        <h2 style={divStyle}> Inspect {this.props.item.name} : </h2>
        <button onClick={this.handleClickPass} style={buttonStylePass}>
          -PASS-
        </button>{" "}
        <button onClick={this.handleClickNA} style={buttonStyleNA}>
          Not Applicable
        </button>
        <button onClick={this.handleClickFail} style={buttonStyleFail}>
          x-Fail-x
        </button>
      </div>
    );
  }
}

const buttonStylePass = {
  backgroundColor: "#00ff00",
  borderRadius: "20px",
  fontSize: "1.25rem"
};

const buttonStyleFail = {
  backgroundColor: "#ff0000",
  borderRadius: "20px",
  fontSize: "1.25rem"
};

const buttonStyleNA = {
  backgroundColor: "#ffff00",
  borderRadius: "20px",
  fontSize: "1.25rem"
};

export default SteeringInspectionItem;
