import React from "react";
import SearchResult from "./SearchResult";

class SearchResults extends React.Component {

  render() {
    const { loading, searchResults, error } = this.props;

    if (loading)
      return <span>Loading...</span>;

    if (error)
      return <span>{error.message}</span>;

    if (!searchResults)
      return null;

    if (!searchResults.items.length)
      return <span>No search results found</span>;

    return (
      <ul class="list-group">
        {searchResults.items.map((repository) => (
          <SearchResult key={repository.id} repository={repository} /> 
        ))}
      </ul>
    );
  }

}

export default SearchResults;