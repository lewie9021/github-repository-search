import React from "react";
import { Link } from "react-router-dom";

class SearchResult extends React.Component {

  getDescription(repository) {
    if (!repository.description)
      return "No description available.";

    const longDescription = repository.description.length > 200;

    return repository.description.substr(0, 200) + (longDescription ? "..." : "");
  }

  render() {
    const { repository } = this.props;
    const description = this.getDescription(repository);

    return (
      <Link to={`/repo/${repository.full_name}`}>
        <button
          class="list-group-item list-group-item-action"
          style={{cursor: "pointer"}}
        >
          <div style={{float: "left", marginRight: "1.25rem"}}>
             <img
                class="img-reponsive img-rounded"
                style={{width: 128}} alt={`${repository.owner.login}'s avatar`}
                src={repository.owner.avatar_url}
              />
          </div>
          <div>
            <h3>{repository.full_name}</h3>
            <span>{description}</span>
          </div>
        </button>
      </Link>
    );
  }

}

export default SearchResult;