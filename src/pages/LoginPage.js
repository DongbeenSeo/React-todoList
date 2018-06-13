import React, { Component } from "react";

export default class loginPage extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <button onClick={onChange}>Sign In</button>
      </div>
    );
  }
}
