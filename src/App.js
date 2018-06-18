import React, { Component } from "react";

import LoginPage from "./pages/LoginPage.js";
import TodoPage from "./pages/TodoPage.js";

import { PageProvider, PageConsumer } from "./contexts/PageContext.js";
import { UserProvider } from "./contexts/UserContext.js";

class App extends Component {
  render() {
    return (
      <PageProvider>
        <PageConsumer>
          {value => (
            <UserProvider onLogin={value.gotoTodoPage}>
              {value.page === "login" ? <LoginPage /> : <TodoPage />}
            </UserProvider>
          )}
        </PageConsumer>
      </PageProvider>
    );
  }
}

export default App;
