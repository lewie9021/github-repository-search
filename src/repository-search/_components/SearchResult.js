import React from "react";

class SearchResult extends React.Component {

  handleClick(repository) {
    alert(JSON.stringify(repository, null, 2));
  };

  render() {
    const { repository } = this.props;

    return (
      <a
        class="list-group-item list-group-item-action"
        style={{cursor: "pointer"}}
        onClick={() => this.handleClick(repository)}
      >
        [{repository.owner.login}] {repository.name} - {repository.description}
      </a>
    );
  }

}

export default SearchResult;