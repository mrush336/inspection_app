import React, { Component } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLogInClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogOutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogOutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLogInClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
