import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Bouton, Form, Row, Col } from "react-bootstrap";

function Formulaire() {
  return (
    <Container>
      <Form>
        <Row>
          <Col md>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Enter your surname" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter your company" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formSurname">
              <Form.Label>Type of Partnership</Form.Label>
              <Form.Select>
                <option>School</option>
                <option>Company</option>
                <option>Media</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Company address</Form.Label>
              <Form.Control type="text" placeholder="Company address" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Your Job</Form.Label>
              <Form.Control type="text" placeholder="Enter your job's name" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Mail</Form.Label>
              <Form.Control type="mail" placeholder="Enter your mail" />
            </Form.Group>
          </Col>
          <Col>
            <Bouton type="submit" variant="primary">
              Submit
            </Bouton>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Formulaire;
