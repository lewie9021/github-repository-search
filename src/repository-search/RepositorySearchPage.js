import React from "react";
import SearchResults from "./_components/SearchResults";
import SearchBox from "./_components/SearchBox";
import * as githubApi from "../_shared/github-api/githubApi";

class RepositorySearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.location.state || {
      searchText: "",
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
          data,
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
  };

  handleSearchTextChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleRepositoryClick = (repository) => {
    const { history } = this.props;

    history.replace(history.location.pathname, this.state);
    history.push(`/repo/${repository.full_name}`);
  };

  render() {
    const {searchText, loading, data, error} = this.state;

    return (
      <div className="container">
        <SearchBox 
          searchText={searchText}
          onTextChange={this.handleSearchTextChange}
          onSubmit={this.handleSearchSubmit}
        />        
        <SearchResults
          loading={loading}
          searchResults={data}
          error={error}
          onRepositoryClick={this.handleRepositoryClick}
        />
      </div>
    );
  }

}

export default RepositorySearchPage;