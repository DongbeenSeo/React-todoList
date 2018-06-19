import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage.js";
import TodoPage from "./pages/TodoPage.js";

import { UserProvider } from "./contexts/UserContext.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" component={TodoPage} />
          {/* {localStorage.getItem("token") ? (
            <Redirect to="todo" />
          ) : (
            <Redirect to="login" />
          )} */}
        </UserProvider>
      </BrowserRouter>
    );
  }
}
const Home = () => {
  if (localStorage.getItem("token")) {
    return <Redirect to="/todo" />;
  } else {
    return <Redirect to="login" />;
  }
};
export default App;
