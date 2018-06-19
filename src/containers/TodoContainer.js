import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import TodoList from "../components/TodoList.js";
import TodoForm from "../components/TodoForm.js";
import { TodoConsumer } from "../contexts/TodoContext.js";

export default class TodoContainer extends Component {
  render() {
    if (localStorage.getItem("token")) {
      return (
        <TodoConsumer>
          {({
            todos,
            loading,
            createTodo,
            completeTodo,
            deleteTodo,
            updateTodoBody
          }) => (
            <div>
              <h1>TodoList</h1>
              <TodoForm onCreate={createTodo} />
              {loading ? (
                <div>loading....</div>
              ) : (
                <TodoList
                  todos={todos}
                  onTodoComplete={completeTodo}
                  onTodoDelete={deleteTodo}
                  onTodoUpdate={updateTodoBody}
                />
              )}
            </div>
          )}
        </TodoConsumer>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}
