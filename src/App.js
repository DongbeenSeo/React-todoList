import React, { Component } from "react";

//todos의 complete는 변경해야 하는 상태임으로 새로 coding
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        body: "React study",
        complete: true
      },
      {
        id: 2,
        body: "Redux study",
        complete: false
      }
    ]
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {todos.map(todo => (
            <li className={todo.complete ? "complete" : ""} key={todo.id}>
              {todo.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
