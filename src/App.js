import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
// Essentially we are telling the React.. what I want to render?
// whatever is in my render() method
class App extends Component {
  /**
   * The constructor method is a special method in a React component that gets
   * called when the component is first initialized. It's primarily used for
   * setting up the initial state and binding event handlers.
   *
   * You should avoid using the constructor for side effects or data fetching;
   * instead, consider using componentDidMount for those purposes.
   *
   * Note that if you define a constructor, you must call super(props) as the
   * first statement to ensure that the component's base class is properly
   * initialized.
   */
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  /**
   * componentDidMount() is a lifecycle method in React that is called after a component
   * has been added to the DOM. This is a good place to perform initial setup, data
   * fetching, or interact with external APIs. It is only called once in a component's
   * lifecycle.
   *
   * Use this method to initialize your component's state, set up event listeners, or
   * fetch data asynchronously. Remember to perform any cleanup in componentWillUnmount()
   * if necessary.
   */
  componentDidMount() {
    // console.log("Component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
    // .then(console.log(this.state));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    /**
     * The `setState` method is used to update the state of a React component. When called,
     * it schedules a re-render of the component and its child components to reflect the
     * new state. It can be used with an object that specifies the state changes or with
     * a callback function to ensure the state changes are applied sequentially.
     *
     * It is important to note that `setState` does not immediately mutate the state; instead,
     * it enqueues the changes, and React will batch and apply them in an optimized way. This
     * asynchronous behavior allows React to perform efficient updates.
     */
    this.setState(() => {
      return { searchField };
    });
  };

  /**
   * The `render` method in a React component is called by React whenever the component
   * needs to update its user interface. This includes the following situations:
   *
   * 1. Initial Rendering: When the component is first created and added to the DOM.
   * 2. State Changes: Whenever the component's state is updated using `setState`.
   * 3. Props Changes: When the component receives new props from its parent component.
   * 4. Parent Component Re-renders: If a parent component containing this component
   *    re-renders, it may cause this component's `render` method to be invoked.
   * 5. Explicit Re-render: You can explicitly force a re-render using `this.forceUpdate()`.
   *
   * Keep in mind that the `render` method should focus solely on describing the component's
   * UI based on its props and state and should not have side effects or modify state directly.
   */
  render() {
    // console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search for monsters!"
          className="search-box"
        />

        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        {/* Always capitalize the first letter of hand-made component */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
