import React, { Component } from 'react';
import Welcome from './components/welcome/Welcome.js';
import NavBar from './components/nav/NavComp'
import Projects from './components/projects/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
        <Projects />
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import WelcomeMessage from './components/Welcome';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <WelcomeMessage />
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
