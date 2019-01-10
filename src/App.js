import React, { Component } from 'react';
import Welcome from './components/welcome/Welcome.js';
import NavBar from './components/nav/NavComp'
import Projects from './components/projects/Projects'
import About from './components/about/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div class="section1">
          <Welcome />
        </div>
        <div class="section">
          <About />
        </div>
        <div class="section1">
          <Projects />
        </div>
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
