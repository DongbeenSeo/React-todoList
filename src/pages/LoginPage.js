import React, { Component } from "react";
import LoginForm from "../components/LoginForm.js";
import { UserConsumer } from "../contexts/UserContext.js";
import { PageConsumer } from "../contexts/PageContext.js";

export default class loginPage extends Component {
  render() {
    return (
      <UserConsumer>
        {({ login }) => (
          <PageConsumer>
            {({ gotoTodoPage }) => (
              <LoginForm
                onLogin={async (username, password) => {
                  await login(username, password);
                  gotoTodoPage();
                }}
              />
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    );
  }
}
