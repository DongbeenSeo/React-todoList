import React, { Component } from "react";

import LoginPage from "./pages/LoginPage.js";
import TodoPage from "./pages/TodoPage.js";

class App extends Component {
  state = {
    page: "login"
  };

  gotoTodoPage = () => {
    this.setState({
      page: "todo"
    });
  };
  gotoLoginPage = () => {
    this.setState({
      page: "login"
    });
  };
  render() {
    const { page } = this.state;
    return (
      <div>
        {page === "login" ? (
          <LoginPage onLogin={this.gotoTodoPage} />
        ) : (
          <TodoPage />
        )}
      </div>
    );
  }
}

export default App;
