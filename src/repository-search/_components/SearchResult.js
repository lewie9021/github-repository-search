import React from "react";

class SearchResult extends React.Component {

  getDescription(repository) {
    if (!repository.description)
      return "No description available.";

    const longDescription = repository.description.length > 200;

    return repository.description.substr(0, 200) + (longDescription ? "..." : "");
  }

  render() {
    const { repository, onRepositoryClick } = this.props;
    const description = this.getDescription(repository);

    return (
      <button
      className="list-group-item list-group-item-action"
        style={{cursor: "pointer"}}
        onClick={() => onRepositoryClick(repository)}
      >
        <div style={{float: "left", marginRight: "1.25rem"}}>
            <img
              className="img-reponsive img-rounded"
              style={{width: 128}} alt={`${repository.owner.login}'s avatar`}
              src={repository.owner.avatar_url}
            />
        </div>
        <div>
          <h3>{repository.full_name}</h3>
          <span>{description}</span>
        </div>
      </button>
    );
  }

}

export default SearchResult;