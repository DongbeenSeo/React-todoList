import React, { Component } from "react";

//todos의 complete는 변경해야 하는 상태임으로 새로 coding
import TodoContainer from "../containers/TodoContainer.js";
import LogoutButtonContainer from "../containers/LogoutButtonContainer";

import { TodoProvider } from "../contexts/TodoContext.js";

export default class TodoPage extends Component {
  render() {
    return (
      <TodoProvider>
        <TodoContainer />
        <LogoutButtonContainer />
      </TodoProvider>
    );
  }
}
