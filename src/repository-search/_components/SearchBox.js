import React from "react";

class SearchBox extends React.Component {

  handleSubmit = (e) => {
    const { searchText, onSubmit } = this.props;

    // Avoid submitting the page.
    e.preventDefault();

    onSubmit(searchText);
  }

  render() {
    const { searchText, onTextChange } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Search for a respository"
            placeholder="Search for a respository"
            value={searchText}
            onChange={onTextChange}
          />
          <div className="input-group-append">
            <button 
              type="submit"
              className="btn btn-outline-secondary"
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