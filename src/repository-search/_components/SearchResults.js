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
          const repositories = searchResults.items || [];

          if (!repositories.length)
            return (
              <div class="alert alert-info" role="alert">
                No search results found
              </div>
            );

          return (
            <ul className="list-group">
              {repositories.map((repository) => (
                <SearchResult
                  key={repository.id}
                  repository={repository}
                  onRepositoryClick={onRepositoryClick}
                /> 
              ))}
            </ul>
          );
        }}
      </LoadContent>
    );   
  }

}

export default SearchResults;