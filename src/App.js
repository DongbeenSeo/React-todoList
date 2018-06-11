import React, { Component } from "react";
import TodoPage from "./components/TodoPage.js";
import "bulma/css/bulma.min.css";
// todos= [
//   {
//     id: 1,
//     body: "React study",
//     complete: true
//   },
//   {
//     id: 2,
//     body: "Redux study",
//     complete: false
//   }
// ]
//

//todos의 complete는 변경해야 하는 상태임으로 새로 coding

let count = 1;

class App extends Component {
  state = {
    pageState: "login"
  };
  gotoTodoPage = () => {
    this.setState({
      pageState: true
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.pageState === "login" ? (
          <div>
            <h1 className="title">Sign In</h1>
            <button onClick={this.gotoTodoPage} className="button is-primary">
              sign in
            </button>
          </div>
        ) : (
          <TodoPage />
        )}
      </div>
    );
  }
}

export default App;
