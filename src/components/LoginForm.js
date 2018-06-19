import React, { Component } from "react";

export default class loginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const { onLogin } = this.props;
    onLogin(username, password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>로그인페이지</h1>
        <label>
          아이디:
          <input name="username" type="text" ref={this.usernameRef} />
        </label>
        <label>
          비밀번호:
          <input name="password" type="password" ref={this.passwordRef} />
        </label>
        <button>로그인</button>
      </form>
    );
  }
}
