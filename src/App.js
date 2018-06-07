import React, { Component } from "react";

const todos = [
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
];
class App extends Component {
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <ul>{todos.map(todo => <li key={todo.id}>{todo.body}</li>)}</ul>
      </div>
    );
  }
}

export default App;
