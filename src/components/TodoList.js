import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    const {
      todos,
      handleTodoItemComplete,
      handleTodoItemDelete,
      handleTodoItemBodyUpdate
    } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            // id={todo.id}
            // body={todo.body}
            // complete={todo.complete}
            {...todo}
            onComplete={handleTodoItemComplete}
            onDelete={handleTodoItemDelete}
            onBodyUpdate={handleTodoItemBodyUpdate}
          />
        ))}
      </ul>
    );
  }
}
