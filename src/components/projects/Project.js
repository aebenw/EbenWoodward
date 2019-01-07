import React from 'react';

import { Col, Card, CardTitle, CardText } from 'reactstrap'

const Project = ({Link, name}) => {
  return(
    <Col>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardText>An extremely revolutionary application. </CardText>
      </Card>
    </Col>
  )
}

export default Project
