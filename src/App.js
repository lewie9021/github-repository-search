import React from 'react';
import './App.css';
import RepositorySearchPage from './repository-search/RepositorySearchPage';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <RepositorySearchPage />
      </div>
    );
  }
}

export default App;
