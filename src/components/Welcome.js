import React, {Fragment} from 'react';

import NavBar from './nav/NavComp'


const WelcomeMessage = () => {
  return (
    <Fragment>
      <NavBar/>
    <h1>Welcome to Eben's Personal Site</h1>
          <h2>Currently undergoing construction</h2>
      <h3>Links to Projects</h3>
      <ul>
        <li>
          <a href="https://limitless-sands-48235.herokuapp.com/home">Subtle</a>
        </li>
        <li>
          <a href="https://https://frontendskype.herokuapp.com/">Skypish</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=IiEX0H9KfbI">Kunst</a>
        </li>
      </ul>
    </Fragment>
  )
}

export default WelcomeMessage
