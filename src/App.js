import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// Essentially we are telling the React.. what I want to render?
// whatever is in my render() method
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Valera",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. {this.state.name}{" "}
            is gay!
          </p>
          <button 
          onClick={() => {
            
          }}
          >Become a gay!</button>
        </header>
      </div>
    );
  }
}

export default App;
