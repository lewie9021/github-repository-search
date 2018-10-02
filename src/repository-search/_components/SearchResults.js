import React from "react";
import SearchResult from "./SearchResult";
import LoadContent from "../../_shared/load-content/LoadContent";

class SearchResults extends React.Component {

  render() {
    const { loading, searchResults, error, onRepositoryClick } = this.props;

    return (
      <LoadContent
        loading={loading}
        data={searchResults}
        error={error}
      >
        {() => {
          if (!searchResults.items.length)
            return <span>No search results found</span>;

          return (
            <ul className="list-group">
              {searchResults.items.map((repository) => (
                <SearchResult key={repository.id} repository={repository} onRepositoryClick={onRepositoryClick} /> 
              ))}
            </ul>
          );
        }}
      </LoadContent>
    );   
  }

}

export default SearchResults;