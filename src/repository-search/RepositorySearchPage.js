import React from "react";
import SearchResults from "./_components/SearchResults";
import SearchBox from "./_components/SearchBox";
import * as githubApi from "./_shared/github-api/githubApi";

class RepositorySearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchResults: null,
      error: null
    }
  }

  handleSearchSubmit = (searchText) => {
    this.setState({
      loading: true,
      data: null
    });

    githubApi.fetchRepositories(searchText)
      .then((data) => {
        this.setState({
          loading: false,
          searchResults: data,
          error: null
        })
      })
      .catch((err) => {
        this.setState({
          loading: false,
          searchResults: null,
          error: err
        })
      });
  }


  render() {
    const {loading, searchResults, error} = this.state;

    return (
      <div class="container">
        <SearchBox onSubmit={this.handleSearchSubmit} />        
        <SearchResults
          loading={loading}
          searchResults={searchResults}
          error={error}
        />
      </div>
    );
  }

}

export default RepositorySearchPage;