import { Component } from "react";

class SearchBox extends Component {

    render() {
        return (
            <input
            // those are props!
            type="search"
            className={`search-box ${this.props.className}`}
            placeholder={this.props.placeholder}
            /**
             * The `onChange` method is a callback function used to handle changes in form input
             * elements like text fields, checkboxes, and radio buttons. It is triggered when the
             * user interacts with the input, such as typing or making a selection.
             *
             * This method is typically used to update the component's state or perform specific
             * actions in response to user input, making it a crucial part of form handling in React.
             */
  
            onChange={this.props.onChangeHandler}
          />
        )
    }
}

export default SearchBox