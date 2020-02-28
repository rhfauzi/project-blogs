import React from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import { login } from "../actions/login.action";
import { login } from "../actions/users.actions";

function Login(props) {
  return (
    <Col className="box-login" md={6} xs={12}>
      <div className="login-img">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt="Logo"
        />
      </div>

      <Formik
        initialValues={{ email: "rhfauzi7@gmail.com", password: "fauzi" }}
        onSubmit={(values, actions) => {
          props.login(values, props.history);
        }}
      >
        {props => (
          <Form noValidate onSubmit={props.handleSubmit}>
            <Row>
              <Col md="12" xs="12">
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                </FormGroup>
              </Col>

              <Col md="12" xs="12">
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Col md="12" xs="12" style={{ textAlign: "center" }}>
              <p>
                If you don't have account, you can Registration{" "}
                <a href="/register">Here</a>.
              </p>
              <FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </Col>
          </Form>
        )}
      </Formik>
    </Col>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    // login: values => dispatch(login(values))
    login: (values, history) => {
      dispatch(login(values, history));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
