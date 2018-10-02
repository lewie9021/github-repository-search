import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RepositorySearchPage from './repository-search/RepositorySearchPage';
import ReadmeViewerPage from './readme-viewer/ReadmeViewerPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app">
          <nav className="navbar navbar-dark bg-dark" style={{marginBottom: 20}}>
            <Link to="/">
              <span className="navbar-brand mb-0 h1">Github Repository Search</span>
            </Link>
          </nav>
          <Route exact path="/" component={RepositorySearchPage} />
          <Route path="/repo/:userId/:repoId" component={ReadmeViewerPage} />
        </div>
      </Router>
    );
  }
}

export default App;
