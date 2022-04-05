import React from "react";
import { Card, Button } from "react-bootstrap";
import logo from "/src/images/test.jpg";

export default function Carte(props) {
  return (
    <Card>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.nom}</Card.Title>
        <Card.Text>{props.texte}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
}
