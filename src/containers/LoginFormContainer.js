import React from "react";

import LoginForm from "../components/LoginForm";
import { UserConsumer } from "../contexts/UserContext";
import { PageConsumer } from "../contexts/PageContext";

export default class LoginFormContainer extends React.Component {
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
