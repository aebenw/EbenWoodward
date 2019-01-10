import React from 'react';

import { Col, Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap'

const Project = ({link, name, text, img}) => {
  return(
    <Col>
      <Card>
        <a href={link}>
          <CardImg top width="100%" src={img} />
        </a>
        <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Project
