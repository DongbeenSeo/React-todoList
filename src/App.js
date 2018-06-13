import React, { Component } from "react";

import LoginPage from "./pages/LoginPage.js";
import TodoPage from "./pages/TodoPage.js";

export const PageContext = React.createContext();

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
    const value = {
      gotoTodoPage: this.gotoTodoPage
    };
    return (
      <PageContext.Provider value={value}>
        <div>{page === "login" ? <LoginPage /> : <TodoPage />}</div>
      </PageContext.Provider>
    );
  }
}

export default App;
