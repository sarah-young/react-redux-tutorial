import React, { Component } from 'react';

// Create a search bar at the top of the application

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // state is a javascript object
    this.state = { term: 'Starting Value' }; //term = property we want to record on state (aka search term)
  } // Only class-based components have state

  render() { // defining a method on a class
    return (
      <div>
        <input
        value = { this.state.term }
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
  );
    // this.setState is the correct way to change state
  }
}

export default SearchBar; // Makes it reachable by other files



// First demo:
// const SearchBar = () => { // => instead of function #ES6
//   return <input />; //React.createElemet in compiler
//   // ...therefore we need to import React.
// };
