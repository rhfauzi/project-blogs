import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";

export default class Subscribe extends Component {
  render() {
    return (
      <Container className="themed-container mx-0 px-0 subscribe" fluid={true}>
        <Container>
          <Row>
            <Col md="3" sm="3" xs="12" className="subscribe-text">
              <h1>STAY</h1>
              <h2>CONNECTED</h2>
              <h5>Subscribe to our newsletter</h5>
            </Col>
            <Col md="6" sm="6" xs="12" className="subscribe-form">
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                />
              </form>
            </Col>
            <Col md="3" sm="3" xs="12" className="subscribe-button">
              <Button color="danger">SUBSCRIBE</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
