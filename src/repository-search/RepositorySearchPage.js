import React from "react";
import SearchResults from "./_components/SearchResults";
import SearchBox from "./_components/SearchBox";
import * as githubApi from "./_shared/github-api/githubApi";

class RepositorySearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      error: null
    }
  }

  handleSearchSubmit = (searchText) => {
    this.setState({
      loading: true,
      data: null
    });

    return githubApi.fetchRepositories(searchText)
      .then((data) => {
        this.setState({
          loading: false,
          data: data,
          error: null
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          data: null,
          error: err
        });
      });
  }

  render() {
    const {loading, data, error} = this.state;

    return (
      <div class="container">
        <SearchBox onSubmit={this.handleSearchSubmit} />        
        <SearchResults
          loading={loading}
          searchResults={data}
          error={error}
        />
      </div>
    );
  }

}

export default RepositorySearchPage;