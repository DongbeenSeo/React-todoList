import React, { Component } from "react";
import todoAPI from "../todoAPI.js";

export default class loginPage extends Component {
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
    const res = await todoAPI.post("/users/login", {
      username: this.state.username,
      password: this.state.password
    });
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", res.data.token);
    this.props.onLogin();
  };

  render() {
    const { pageChange } = this.props;
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
