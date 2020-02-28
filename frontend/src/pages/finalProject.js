import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Col, Row } from "reactstrap";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactFilestack from "filestack-react";

import { inputFinalProject } from "../actions/blog.action";

class finelProject extends Component {
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
            fileProject: ""
          }}
          validate={values => {
            const errors = {};
            if (!values.judul) {
              errors.judul = "Required";
            } else if (!values.deskripsi) {
              errors.deskripsi = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            let formData = new FormData();
            console.log("INI VALUEEE", values);

            console.log("INI form data", formData);
            // this.props.postRegister(formData);
            this.props.inputFinalProject(values, this.props.history);
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
                    <Label>File</Label>
                    <ReactFilestack
                      apikey={"ANGRf0KySQrWDCNZ4TTyrz"}
                      onSuccess={res => {
                        setFieldValue("fileProject", res.filesUploaded[0].url);
                      }}
                      //   onSuccess={res => console.log(res)}
                    />
                  </FormGroup>
                </Col>
              </Row>

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
    inputFinalProject: (values, history) => {
      dispatch(inputFinalProject(values, history));
    }
  };
};

// export default connect(null, mapDispatchToProps)(Register);

export default withRouter(connect(null, mapDispatchToProps)(finelProject));
