import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    newTodoBody: ""
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };
  handleBtnClick = e => {
    this.props.onCreate(this.state.newTodoBody);
    this.setState({
      newTodoBody: ""
    });
  };

  render() {
    const { newTodoBody } = this.state;
    return (
      <label>
        새 할일
        <input
          type="text"
          value={newTodoBody}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>추가</button>
      </label>
    );
  }
}
