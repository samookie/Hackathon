import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";

const onSubmit = (data, r) => {
  alert(`Thank you for your message from ${data.email}`);
  const templateId = "template_l7s9qxd";
  const serviceID = "my_gmail";

  r.target.reset();
};
function FormPartner(props) {
  /*if(blabla.getElementById("") == "School"){
    email = "school@leavy.co";
  }*/

  return (
    <div className="formulaire">
      <Form>
        <Row>
          <Col md>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
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
                required
              />
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
              <Form.Control
                type="text"
                placeholder="Company address"
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
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="formCompany">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="mail"
                placeholder="Enter your mail"
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
