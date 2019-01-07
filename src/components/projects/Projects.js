import React from 'react';
import { Container, Row } from 'reactstrap';
import Project from './Project'


///////////Good idea to use the GITHUB API and grab my Pinned Projects
const Projects = () => {
  return(
    <Container>
      <Row>
      <h3>Links to Projects</h3>
      </Row>
      <Row>
        <Project link={"https://limitless-sands-48235.herokuapp.com/home"} name={"Subtle"}/>
        <Project link={"https://https://frontendskype.herokuapp.com/"} name={"Skypish"}/>
        <Project link={"https://www.youtube.com/watch?v=IiEX0H9KfbI"} name={"Kunst"}/>
      </Row>
    </Container>
  )

}

export default Projects
