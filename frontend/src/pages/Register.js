import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { postRegister } from "../actions/users.actions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      type: ""
    };
  }

  handleImage = event => {
    this.setState({
      type: event.target.files[0],
      image: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    return (
      <Col className="box-login" md={6} xs={12}>
        <div className="login-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Logo"
          />
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            address: "",
            username: "",
            avatar: ""
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.firstname) {
              errors.firstname = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            let formData = new FormData();

            for (const key in values) {
              if (values.hasOwnProperty(key)) {
                formData.append(key, values[key]);
                if (key === "avatar") {
                  formData.append(key, values.avatar.file);
                }
              }
            }

            // this.props.postRegister(formData);
            this.props.postRegister(values, this.props.history);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Row>
                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                    <span style={{ color: "red", fontStyle: "italic" }}>
                      {errors.firstname &&
                        touched.firstname &&
                        errors.firstname}{" "}
                    </span>
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                    {errors.lastname && touched.lastname && errors.lastname}
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <span style={{ color: "red", fontStyle: "italic" }}>
                      {errors.email && touched.email && errors.email}{" "}
                    </span>
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Address</Label>
                    <Input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      style={{ height: "80px" }}
                    />
                    {errors.address && touched.address && errors.address}
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Foto</Label>
                    <Input
                      type="file"
                      name="avatar"
                      onChange={event => {
                        setFieldValue("avatar", event.currentTarget.files[0]);
                        this.handleImage(event);
                      }}
                    />
                    {this.state.image !== "" && (
                      <img
                        className="avatarreg"
                        src={this.state.image}
                        alt="avatar"
                      />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              {/* email: "rhfauzi7@gmail.com", password: "fauzi", */}

              <Col md="12" xs="12" style={{ textAlign: "center" }}>
                <FormGroup>
                  <Button color="primary" type="submit" disabled={isSubmitting}>
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
}

const mapDispatchToProps = dispatch => {
  return {
    // postRegister: values => dispatch(postRegister(values))
    postRegister: (values, history) => {
      dispatch(postRegister(values, history));
    }
  };
};

// export default connect(null, mapDispatchToProps)(Register);

export default withRouter(connect(null, mapDispatchToProps)(Register));
