import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TemplateCard = (props) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="hidden-text">{props.hidden}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TemplateCard;
