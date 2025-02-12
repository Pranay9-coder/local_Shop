import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="mt-5">
      <Row>
        {/* Left Section */}
        <Col md={6}>
          <h2 className="fw-bold">Get In Touch With Us</h2>
          <p>Share some details here. This is a flexible section where you can share anything you want.</p>

          <h5 className="fw-bold mt-4">Address</h5>
          <p>2972 Westheimer Rd, Santa Ana, Illinois 85486</p>

          <hr />

          <Row>
            <Col>
              <h5 className="fw-bold">Phone</h5>
              <p>(+91) 987 654 321</p>
            </Col>
            <Col>
              <h5 className="fw-bold">Email</h5>
              <p>info@contact.com</p>
            </Col>
          </Row>

          <hr />

          <h5 className="fw-bold">Social Media</h5>
          <div className="d-flex gap-3">
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaTwitter size={25} />
            <FaYoutube size={25} />
          </div>
        </Col>

        {/* Right Section - Contact Form */}
        <Col md={6}>
          <Form className="p-4 border rounded shadow">
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Name *</Form.Label>
                  <Form.Control type="text" placeholder="First" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comment or Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message here..." />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
