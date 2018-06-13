import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    const { todos, onTodoComplete, onTodoDelete, onTodoUpdate } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            // id={todo.id}
            // body={todo.body}
            // complete={todo.complete}
            {...todo}
            onComplete={onTodoComplete}
            onDelete={onTodoDelete}
            onBodyUpdate={onTodoUpdate}
          />
        ))}
      </ul>
    );
  }
}
