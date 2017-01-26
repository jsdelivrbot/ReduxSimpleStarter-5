import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) { //initialize the state by defining the constructor method
    super(props); //super calls the constructor inside Component

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
