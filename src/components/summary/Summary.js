import React, { Component } from "react";
//import SummaryItem from "./SummaryItem";

export default class Summary extends Component {
  render() {
    const brakeItems = this.props.items.brakes.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const couplingItems = this.props.items.coupling.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const exhaustItems = this.props.items.exhaust.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const fuelItems = this.props.items.fuel.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const lightingItems = this.props.items.lighting.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const loadingItems = this.props.items.loading.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const steeringItems = this.props.items.steering.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const suspensionItems = this.props.items.suspension.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const frameItems = this.props.items.frame.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const tiresItems = this.props.items.tires.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const wheelsItems = this.props.items.wheels.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const windshieldItems = this.props.items.windshield.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const wipersItems = this.props.items.wipers.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));
    const seatsItems = this.props.items.seats.map(item => (
      <li key={item.id}>
        {item.name} : {item.pass}
      </li>
    ));

    return (
      <div>
        <div>
          <ol style={ulStyle}>{brakeItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{couplingItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{exhaustItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{fuelItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{lightingItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{loadingItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{steeringItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{suspensionItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{frameItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{tiresItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{wheelsItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{windshieldItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{wipersItems}</ol>
        </div>
        <div>
          <ol style={ulStyle}>{seatsItems}</ol>
        </div>
      </div>
    );
  }
}

const ulStyle = {
  color: "#ffff00"
};
