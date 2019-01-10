import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ExternalLinks from './ExternalLinks'

const Welcome = () =>{

  return(
    <div className="welcome">
    <Container>
      <div className="welcome-content">
      <Row>
        <h1 className="info">Eben Woodward</h1>
      </Row>
      <Row>
        <h3 className="info">Software Developer</h3>
      </Row>
      <ExternalLinks />
    </div>
    </Container>
    </div>
  )

}

export default Welcome;
