import React from "react";
import "./badges.css";

class Badges extends React.PureComponent {

  render() {
    const { stars, forks, issues } = this.props;

    return (
      <span className="badges">
        <span className="badge badge-primary">Stars: {stars}</span>
        &nbsp;
        <span className="badge badge-secondary">Forks: {forks}</span>
        &nbsp;
        <span className="badge badge-warning">Issues: {issues}</span>
      </span>
    );
  }

}

export default Badges