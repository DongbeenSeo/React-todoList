import React, { Component } from "react";
import TodoList from "./TodoList.js";

import axios from "axios";
const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default class TodoPage extends Component {
  state = {
    loading: false,
    loginState: "login",
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

  handleTodoItemBodyUpdate = async (id, body) => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      body
    });
    await this.fetchTodos();
  };

  handleTodoItemComplete = async id => {
    this.setState({
      loading: true
    });
    let completeState = false;
    const res = await todoAPI.get(`/todos/${id}`);
    res.data.complete ? (completeState = false) : (completeState = true);

    await todoAPI.patch(`/todos/${id}`, {
      complete: completeState
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
        <h1 className="title">TodoList</h1>
        <label>
          새 할일
          <input
            type="text"
            value={this.state.newTodoBody}
            onChange={this.handleInputChange}
            className="input is-primary"
          />
          <button onClick={this.handleBtnClick} className="button is-danger">
            추가
          </button>
        </label>
        {this.state.loading ? (
          <div>loading....</div>
        ) : (
          <TodoList
            todos={this.state.todos}
            handleTodoItemComplete={this.handleTodoItemComplete}
            handleTodoItemDelete={this.handleTodoItemDelete}
            handleTodoItemBodyUpdate={this.handleTodoItemBodyUpdate}
          />
        )}
      </div>
    );
  }
}
