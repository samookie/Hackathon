import React from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";

function FormPartner(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="formulaire">
      <Form onSubmit={sendEmail}>
        <Row>
          <Col md>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="formName"
                required
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                name="formSurname"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="formPhone"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company"
                name="formCompany"
                required
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formType">
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
            <Form.Group controlId="formAddress">
              <Form.Label>Company address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company address"
                name="formAddress"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Your Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job's name"
                name="formJob"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="mail"
                placeholder="Enter your mail"
                name="formEmail"
                required
              />
            </Form.Group>
          </Col>
          <Col md>
            <Button type="Submit" variant="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormPartner;
