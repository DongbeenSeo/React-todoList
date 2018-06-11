import React, { Component } from "react";
import TodoList from "./components/TodoList.js";

export default class TodoPage extends Component {
  render() {
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
            handleTodoItemBodyUpdate={this.handleTodoItemBodyUpdate}
          />
        )}
      </div>
    );
  }
}
