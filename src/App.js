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
          <nav class="navbar navbar-dark bg-dark" style={{marginBottom: 20}}>
            <span class="navbar-brand mb-0 h1">Github Repository Search</span>
          </nav>
          <Route exact path="/" component={RepositorySearchPage} />
          <Route path="/repo/:userId/:repoId" component={ReadmeViewerPage} />
        </div>
      </Router>
    );
  }
}

export default App;
