import React, { Component } from "react";
import "./App.css";
import Home from "../home/Home";
import Contact from "../contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Kareem, from React</h1>
        <Home />
        <Contact />
      </div>
    );
  }
}

export default App;
