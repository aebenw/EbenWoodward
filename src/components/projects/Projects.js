import React from 'react';
import { Container, Row } from 'reactstrap';
import Project from './Project'


///////////Good idea to use the GITHUB API and grab my Pinned Projects

const kunst = {
  name: "Kunst",
  link: "https://www.youtube.com/watch?v=IiEX0H9KfbI",
  text: "See what a painting looks like in a gallery.",
  img: "https://s3.amazonaws.com/personaleben/Screen+Shot+2019-01-09+at+4.24.08+PM.png"
}

const subtle = {
  name: "Subtle",
  link: "https://limitless-sands-48235.herokuapp.com/home",
  text: "A subtly designed social networking application",
  img: "https://s3.amazonaws.com/personaleben/Screen+Shot+2019-01-09+at+4.46.47+PM.png"
}

const skypish = {
  name: "Skypish",
  link: "https://frontendskype.herokuapp.com/",
  text: "A video chat and messaging app",
  img: "https://s3.amazonaws.com/personaleben/Skypish.png"
}


const Projects = () => {
  return(
    <Container>
      <Row>
      <h3 className="info header">Projects</h3>
      </Row>
      <Row>
        <Project link={subtle.link} name={subtle.name} text={subtle.text} img={subtle.img}/>
        <Project link={skypish.link} name={skypish.name} text={skypish.text} img={skypish.img}/>
        <Project link={kunst.link} name={kunst.name} text={kunst.text} img={kunst.img}/>
      </Row>
    </Container>
  )

}

export default Projects
