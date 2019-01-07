import React, { Component } from 'react';
import WelcomeMessage from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WelcomeMessage />
        </header>
      </div>
    );
  }
}

export default App;
