import React, { Component } from "react";

// todos= [
//   {
//     id: 1,
//     body: "React study",
//     complete: true
//   },
//   {
//     id: 2,
//     body: "Redux study",
//     complete: false
//   }
// ]

//todos의 complete는 변경해야 하는 상태임으로 새로 coding

let count = 0;

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: "React study",
        complete: true
      },
      {
        id: count++,
        body: "Redux study",
        complete: false
      }
    ],
    newTodoBody: ""
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleBtnClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodoBody: ""
      });
    }
  };
  render() {
    const { todos, newTodoBody } = this.state;
    return (
      <div>
        <h1>TodoList</h1>
        <label>
          새 할일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>추가</button>
        </label>
        <ul>
          {todos.map(todo => (
            <li className={todo.complete ? "complete" : ""} key={todo.id}>
              {todo.body}
              <button
                onClick={e => {
                  this.setState({
                    todos: todos.map(t => {
                      const newTodo = {
                        ...t
                      };
                      if (t.id === todo.id) {
                        newTodo.complete
                          ? (newTodo.complete = false)
                          : (newTodo.complete = true);
                      }
                      return newTodo;
                    })
                  });
                  todo.id;
                }}
              >
                완료
              </button>
              <button
                onClick={e => {
                  this.setState({
                    todos: todos.filter(t => t.id !== todo.id)
                  });
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
