import React from "react";
import * as githubApi from "../_shared/github-api/githubApi";
import ReactMarkdown from "react-markdown";

class ReadmeViewerPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      error: null
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const { userId, repoId } = match.params;

    this.setState({
      loading: true,
      data: null
    });

    return githubApi.fetchRepository(userId, repoId)
      .then((data) => {
        this.setState({
          loading: false,
          data: data,
          error: null
        })
      })
      .catch((err) => {
        this.setState({
          loading: false,
          data: null,
          error: err
        })
      });
  }

  render() {
    const {loading, data, error} = this.state;

    if (loading)
      return <span>Loading...</span>;

    if (error)
      return <span>{error.message}</span>;

    if (!data)
      return null;

    if (!data.readme)
      return <span>No README found</span>

    return (
      <div className="container">
        <h2>{data.fullName}</h2>
        <hr />
        <h3>
          <span className="badge badge-primary">Stars: {data.stars}</span>
          &nbsp;
          <span className="badge badge-secondary">Forks: {data.forks}</span>
          &nbsp;
          <span className="badge badge-warning">Issues: {data.issues}</span>
        </h3>
        <div>
          <ReactMarkdown source={data.readme} />
        </div>
      </div>
    );
  }

}

export default ReadmeViewerPage;