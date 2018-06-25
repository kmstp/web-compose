import React, { Component } from 'react';
import Router from './LoadableRouter';

class App extends Component {
  render() {
    return (
      <div style={{'marginLeft': '2%', 'marginRight': '2%'}}><Router /></div>
    );
  }
}

export default App;
