import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import RepositorySearchPage from './repository-search/RepositorySearchPage';
import ReadmeViewerPage from './repository-search/readme-viewer/ReadmeViewerPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Route exact path="/" component={RepositorySearchPage} />
          <Route path="/repo/:userId/:repoId" component={ReadmeViewerPage} />
        </div>
      </Router>
    );
  }
}

export default App;
