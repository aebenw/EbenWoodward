import React from 'react';

import { Container, Row, Col } from 'reactstrap'

const profImg = "https://s3.amazonaws.com/personaleben/lady_liberty.png"

const About = () => {
  return(
    <Container>
        <h3 className="info header">About me</h3>
        <Container>
          <Row>
            {/* <Col> */}
            <div className="profile">
              <img className="profile-image" src={profImg} alt="Eben at lady liberty"/>
            </div>
            {/* </Col>
            <Col> */}
            <div className="profile-text">
              <h4 className="prof-text">Carpenter turned coder</h4>
            </div>
            {/* </Col> */}
          </Row>
        </Container>
    </Container>
  )
}

export default About
