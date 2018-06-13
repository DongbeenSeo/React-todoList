import React, { Component } from "react";
import todoAPI from "../todoAPI.js";
import { PageContext } from "../App.js";

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

  handleLoginClick = onLogin => async e => {
    //로그인 요청
    const res = await todoAPI.post("/users/login", {
      username: this.state.username,
      password: this.state.password
    });
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", res.data.token);
    onLogin();
  };

  render() {
    const { username, password } = this.state;
    return (
      <PageContext.Consumer>
        {value => (
          <React.Fragment>
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
            <button onClick={this.handleLoginClick(value.gotoTodoPage)}>
              Sign In
            </button>
          </React.Fragment>
        )}
      </PageContext.Consumer>
    );
  }
}
