import React, { Component } from "react";

export default class TodoItem extends Component {
  handleBodyClick = e => {
    const newBody = prompt("새 내용을 입력하세요.");
    const { id, onBodyUpdate } = this.props;
    onBodyUpdate(id, newBody);
  };
  render() {
    const { id, body, complete, onComplete, onDelete } = this.props;
    return (
      <li key={id}>
        <span
          className={complete ? "complete" : ""}
          onClick={this.handleBodyClick}
        >
          {body}
        </span>
        <div className="buttons">
          <button
            onClick={e => {
              onComplete(id);
            }}
            className="button is-primary"
          >
            완료
          </button>

          <button
            onClick={e => {
              onDelete(id);
            }}
            className="button is-danger"
          >
            삭제
          </button>
        </div>
      </li>
    );
  }
}
