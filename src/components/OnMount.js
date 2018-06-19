import React, { Component } from "react";

export default class OnMount extends Component {
  componentDidMount() {
    const { onMount } = this.props;
    console.log("onMount");
    onMount();
  }

  render() {
    return null;
  }
}
