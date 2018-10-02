import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import * as githubApi from "../_shared/github-api/githubApi";
import LoadContent from "../_shared/load-content/LoadContent";
import Badges from "./_components/Badges";

class ReadmeViewerPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.location.state || {
      loading: false,
      data: null,
      error: null
    }
  }

  componentDidMount() {
    const { match, history } = this.props;
    const { userId, repoId } = match.params;

    // Already fetched historically.
    if (this.state.data)
      return;

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
        });

        history.replace(history.location.pathname, {
          ...this.state,
          // Set state is async.
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
        });
      });
  }

  render() {
    const {loading, data, error} = this.state;

    return (
      <div className="container">
        <LoadContent
          loading={loading}
          data={data}
          error={error}
        >
          {() => {
            if (!data.readme)
              return (
                <div class="alert alert-info" role="alert">
                  No README found
                </div>
              );

            return (
              <Fragment>
                <h2>
                  <span>{data.fullName}</span>
                  <Badges
                    stars={data.stars}
                    forks={data.forks}
                    issues={data.issues}
                  />
                </h2>
                <hr />
                <div>
                  <ReactMarkdown source={data.readme} />
                </div>
              </Fragment>
            );
          }}
        </LoadContent>
      </div>
    );
  }

}

export default ReadmeViewerPage;