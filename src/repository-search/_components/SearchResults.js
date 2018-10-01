import React from "react";
import SearchResult from "./SearchResult";

class SearchResults extends React.Component {

  render() {
    const { loading, searchResults, error, onRepositoryClick } = this.props;

    if (loading)
      return <span>Loading...</span>;

    if (error)
      return <span>{error.message}</span>;

    if (!searchResults)
      return null;

    if (!searchResults.items.length)
      return <span>No search results found</span>;

    return (
      <ul className="list-group">
        {searchResults.items.map((repository) => (
          <SearchResult key={repository.id} repository={repository} onRepositoryClick={onRepositoryClick} /> 
        ))}
      </ul>
    );
  }

}

export default SearchResults;