import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { inputFilestack } from "../actions/blog.action";

import ReactFilestack from "filestack-react";

class UplodFile extends Component {
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
    console.log("ini props", this.props);
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
            judul: "",
            deskripsi: "",
            avatar: ""
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

            // for (const key in values) {
            //   if (values.hasOwnProperty(key)) {
            //     formData.append(key, values[key]);
            //     if (key === "avatar") {
            //       formData.append(key, values.avatar.file);
            //     }
            //   }
            // }
            console.log("INI form data", formData);
            // this.props.postRegister(formData);
            this.props.inputFilestack(values, this.props.history);
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
                    <Label>Judul</Label>
                    <Input
                      type="text"
                      name="judul"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.judul}
                    />
                    <span style={{ color: "red", fontStyle: "italic" }}>
                      {errors.judul && touched.judul && errors.judul}{" "}
                    </span>
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Deskripsi</Label>
                    <Input
                      type="text"
                      name="deskripsi"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.deskripsi}
                      style={{ height: "80px" }}
                    />
                    {errors.deskripsi && touched.deskripsi && errors.deskripsi}
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Gambar</Label>
                    <ReactFilestack
                      apikey={"ANGRf0KySQrWDCNZ4TTyrz"}
                      onSuccess={res => {
                        setFieldValue("avatar", res.filesUploaded[0].url);
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
    inputFilestack: (values, history) => {
      dispatch(inputFilestack(values, history));
    }
  };
};

// export default connect(null, mapDispatchToProps)(Register);

export default withRouter(connect(null, mapDispatchToProps)(UplodFile));
