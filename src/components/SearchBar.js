import React from 'react'

export default class SearchBar extends React.Component {
  state = {
    term: ''
  }
  onInputChange = e => {
    this.setState({ term: e.target.value })
  }
  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmission(this.state.term)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.value} onChange={this.onInputChange} />
          <button>Search</button>
        </form>
      </div>
    )
  }
}
