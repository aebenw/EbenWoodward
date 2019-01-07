import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ExternalLinks from './ExternalLinks'

const Welcome = () =>{

  return(
    <div className="welcome">
    <Container>
      <div className="welcome-content">
      <Row>
        <h1>Eben Woodward</h1>
      </Row>
      <Row>
        <h3>Software Developer</h3>
      </Row>
      <ExternalLinks />
    </div>
    </Container>
    </div>
  )

}

export default Welcome;
