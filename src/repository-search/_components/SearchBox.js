import React from "react";

class SearchBox extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props;

    // Avoid submitting the page.
    e.preventDefault();

    onSubmit(this.state.searchText);
  }

  render() {
    const { searchText } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Search for a respository"
            placeholder="Search for a respository"
            value={searchText}
            onChange={(e) => this.setState({searchText: e.target.value})}
          />
          <div class="input-group-append">
            <button 
              type="submit"
              class="btn btn-outline-secondary"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }

}

export default SearchBox;