import React, { Component } from "react";
import todoAPI from "../todoAPI.js";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  login = async (username, password) => {
    //로그인 요청
    const res = await todoAPI.post("/users/login", {
      username: username,
      password: password
    });
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", res.data.token);
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
export { UserProvider, Consumer as UserConsumer };
