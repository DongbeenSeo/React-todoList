import React, { Component } from "react";
import axios from "axios";

import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

//todos의 complete는 변경해야 하는 상태임으로 새로 coding

class App extends Component {
  state = {
    loading: false,
    todos: []
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

  updataTodoBody = async (id, body) => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      body
    });
    await this.fetchTodos();
  };

  completeTodo = async id => {
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
  };

  deleteTodo = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.delete(`todos/${id}`);
    await this.fetchTodos();
  };

  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      };
      this.setState({
        loading: true
      });
      await todoAPI.post("/todos", newTodo);
      await this.fetchTodos();
    }
  };

  render() {
    const { todos, loading } = this.state;
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm onCreate={this.createTodo} />
        {loading ? (
          <div>loading....</div>
        ) : (
          <TodoList
            todos={todos}
            onTodoComplete={this.completeTodo}
            onTodoDelete={this.deleteTodo}
            onTodoUpdate={this.updataTodoBody}
          />
        )}
      </div>
    );
  }
}

export default App;
