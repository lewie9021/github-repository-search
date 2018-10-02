import React from "react";

class LoadContent extends React.Component {

  render() {
    const {loading, data, error, children} = this.props;

    if (loading)
      return (
        <div style={{textAlign: "center"}}>
          <span>Loading...</span>
        </div>
      );

    if (error)
      return (
        <div style={{textAlign: "center"}}>
          <span>There was a problem with your request:</span>
          <br />
          <span style={{color: "grey"}}>{error.message}</span>
        </div>
      )

    if (!data)
      return null;

    return children(data);
  }

}

export default LoadContent;