import React, { Component } from "react";
import TodoItem from "./components/TodoItem.js";
import TodoList from "./components/TodoList.js";
import axios from "axios";

const todoAPI = axios.create({
  baseURL: "https://react-todolist.glitch.me/"
});
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

let count = 1;

class App extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: count++,
      //   body: "React study",
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: "Redux study",
      //   complete: false
      // }
    ],
    newTodoBody: ""
  };

  async componentDidMount() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    this.setState({
      loading: true
    });
    const res = await todoAPI.get("/todos");
    this.setState({
      todos: res.data,
      loading: false
    });
  };

  handleTodoItemComplete = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    });
    await this.fetchTodos();
    // console.log(todos);
    // this.setState({
    //   todos: this.state.todos.map(t => {
    //     const newTodo = {
    //       ...t
    //     };
    //     if (t.id === id) {
    //       //배열을 순회하는 id와 선택한 id의 값이 같으면
    //       newTodo.complete
    //         ? (newTodo.complete = false)
    //         : (newTodo.complete = true);
    //     }
    //     return newTodo;
    //   })
    // });
  };

  handleTodoItemDelete = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.delete(`todos/${id}`);
    await this.fetchTodos();
    // this.setState({
    //   todos: this.state.todos.filter(t => t.id !== id)
    // });
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleBtnClick = async e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false
      };
      this.setState({
        loading: true
      });
      await todoAPI.post("/todos", newTodo);
      await this.fetchTodos();
      this.setState({
        newTodoBody: ""
      });
    }
  };

  render() {
    const { todos, newTodoBody, loading } = this.state;
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
        {loading ? (
          <div>loading....</div>
        ) : (
          <TodoList
            todos={todos}
            handleTodoItemComplete={this.handleTodoItemComplete}
            handleTodoItemDelete={this.handleTodoItemDelete}
          />
        )}
      </div>
    );
  }
}

export default App;
