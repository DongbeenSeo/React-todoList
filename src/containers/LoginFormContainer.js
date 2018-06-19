import React, { Component } from "react";

import LoginForm from "../components/LoginForm";
import { UserConsumer } from "../contexts/UserContext";
import { PageConsumer } from "../contexts/PageContext";
import OnMount from "../components/OnMount.js";

export default class LoginFormContainer extends Component {
  render() {
    return (
      <UserConsumer>
        {({ login }) => (
          <PageConsumer>
            {({ gotoTodoPage }) => (
              <React.Fragment>
                <LoginForm
                  onLogin={async (username, password) => {
                    await login(username, password);
                    gotoTodoPage();
                  }}
                />
                {localStorage.getItem("token") && (
                  <OnMount onMount={gotoTodoPage} />
                )}
              </React.Fragment>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    );
  }
}
