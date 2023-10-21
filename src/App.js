import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// Essentially we are telling the React.. what I want to render?
// whatever is in my render() method
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("Constructor executed");
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
      .then(console.log(this.state));
  }

  render() {
    console.log("Render completed");
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search monsters"
          onChange={(event) => {
            let filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.includes(event.target.value);
            });


            this.setState (() => {
              return { monsters: filteredMonsters };
            });
          }}
        />

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
