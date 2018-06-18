import React, { Component } from "react";

export default class loginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleLoginClick = async e => {
    //로그인 요청
    const { onLogin } = this.props;
    onLogin(this.state.username, this.state.password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Sign In</h1>
        <label>
          ID
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </label>

        <button onClick={this.handleLoginClick}>Sign In</button>
      </div>
    );
  }
}
