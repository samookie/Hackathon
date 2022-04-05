import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
function FormPartner() {
  return (
    <div>
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
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
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
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Company address</Form.Label>
              <Form.Control type="text" placeholder="Company address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Your Job</Form.Label>
              <Form.Control type="text" placeholder="Enter your job's name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Mail</Form.Label>
              <Form.Control type="mail" placeholder="Enter your mail" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormPartner;
