import React from "react";
import "./loadContent.css";

class LoadContent extends React.Component {

  render() {
    const {loading, data, error, children} = this.props;

    if (loading)
      return (
        <div className="loading-box">
          <span>Loading...</span>
        </div>
      );

    if (error)
      return (
        <div class="alert alert-danger" role="alert">
          There was a problem with your request: {error.message}
        </div>
      )

    if (!data)
      return null;

    return children(data);
  }

}

export default LoadContent;