import React, { Component } from "react";
import todoAPI from "../todoAPI.js";

const { Provider, Consumer } = React.createContext();

export default class TodoProvider extends Component {
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

  updateTodoBody = async (id, body) => {
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
  alertLogin = () => {
    alert("need to Sign In");
  };
  render() {
    const value = {
      loading: this.state.loading,
      todos: this.state.todos,
      fetchTodos: this.fetchTodos,
      updateTodoBody: this.updateTodoBody,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo,
      createTodo: this.createTodo,
      alertLogin: this.alertLogin
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { TodoProvider, Consumer as TodoConsumer };
