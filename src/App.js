import React, { Component } from "react";

import LoginPage from "./pages/LoginPage.js";
import TodoPage from "./pages/TodoPage.js";

import { PageProvider, PageConsumer } from "./contexts/PageContext.js";
import { UserProvider } from "./contexts/UserContext.js";

class App extends Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => (value.page === "login" ? <LoginPage /> : <TodoPage />)}
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    );
  }
}

export default App;
