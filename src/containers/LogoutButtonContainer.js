import React from "react";

import { UserConsumer } from "../contexts/UserContext";
import { PageConsumer } from "../contexts/PageContext";

export default class LogoutButtonContainer extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({ logout }) => (
          <PageConsumer>
            {({ gotoLoginPage }) => (
              <button
                onClick={e => {
                  logout();
                  gotoLoginPage();
                }}
              >
                로그아웃
              </button>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    );
  }
}
