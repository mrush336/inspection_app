import React, { Component } from "react";

export class SuspensionInspectionItem extends Component {
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
  };
  handleClickFail = () => {
    this.setState({
      divStyle: {
        backgroundColor: "#ff0000"
      }
    });
  };
  handleClickNA = () => {
    this.setState({
      divStyle: {
        backgroundColor: "#ffff00"
      }
    });
  };
  render() {
    const { divStyle } = this.state;
    return (
      <div>
        <h2 style={divStyle}>
          {" "}
          Inspect {this.props.item.name} for any defects:{" "}
        </h2>
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
  fontSize: "20px"
};

const buttonStyleFail = {
  backgroundColor: "#ff0000",
  borderRadius: "20px",
  fontSize: "20px"
};

const buttonStyleNA = {
  backgroundColor: "#ffff00",
  borderRadius: "20px",
  fontSize: "20px"
};

export default SuspensionInspectionItem;
