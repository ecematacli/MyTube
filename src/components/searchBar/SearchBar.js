import React from 'react';

import './SearchBar.css';

export default class SearchBar extends React.Component {
  state = {
    term: ''
  };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmission(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <form className="search-bar-form" onSubmit={this.onFormSubmit}>
          <input
            className="search-input"
            placeholder=""
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
