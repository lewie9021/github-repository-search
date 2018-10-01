import React from "react";

class SearchResult extends React.Component {

  render() {
    const { repository } = this.props;

    return (
      <li class="list-group-item">
        [{repository.owner.login}] {repository.name} - {repository.description}
      </li>
    );
  }

}

export default SearchResult;