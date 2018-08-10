import React, { Component } from 'react';

import Effect from './components/Effect.js';
import Router from './Router.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <p>React-cli-template</p>
        <Router/>
      </div>
    )
  }
}

export default App;
