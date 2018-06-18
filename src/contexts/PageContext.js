import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class PageProvider extends Component {
  state = {
    page: "login"
  };

  gotoTodoPage = () => {
    this.setState({
      page: "todo"
    });
  };
  render() {
    const value = {
      page: this.state.page,
      gotoTodoPage: this.gotoTodoPage
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
