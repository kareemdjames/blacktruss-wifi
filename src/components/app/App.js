import React, { Component } from "react";
import "./App.css";
import Home from "../home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Kareem, from React</h1>
        <Home />
      </div>
    );
  }
}

export default App;
