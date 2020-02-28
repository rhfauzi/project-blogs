import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { editBlog, getDetail } from "../actions";

const BACKEND = process.env.REACT_APP_OWN_API;

class PageEditBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      image: ""
    };
  }

  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.getDetail(id);
  };

  handleImage = event => {
    this.setState({
      type: event.target.files[0],
      image: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    const { data = {} } = this.props;
    console.log(this.state.gambarType, "gambarType zzzzzz");

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
            judul: data.judul,
            deskripsi: data.deskripsi,
            avatar: ""
          }}
          enableReinitialize={true}
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

            for (const key in values) {
              if (values.hasOwnProperty(key)) {
                formData.append(key, values[key]);
                if (key === "avatar") {
                  formData.append(key, values.avatar.file);
                }
              }
            }
            this.props.editBlog(formData, this.props.match.params.id);
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
                  <h1>Edit Blogs</h1>
                  <br />
                  <FormGroup>
                    <Label>Judul</Label>
                    <Input
                      type="text"
                      name="judul"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.judul || ""}
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
                      style={{ height: "80px" }}
                      value={values.deskripsi || ""}
                    />
                    {errors.deskripsi && touched.deskripsi && errors.deskripsi}
                  </FormGroup>
                </Col>

                <Col md="12" xs="12">
                  <FormGroup>
                    <Label>Image</Label>
                    <Input
                      type="file"
                      name="avatar"
                      onChange={event => {
                        setFieldValue("avatar", event.currentTarget.files[0]);
                        this.handleImage(event);
                      }}
                      onBlur={handleBlur}
                    />
                    {this.state.image !== "" ? (
                      <img
                        src={this.state.image}
                        alt="avatar"
                        style={{ width: "100%" }}
                      />
                    ) : (
                      <img
                        style={{ width: "100%" }}
                        alt="oldImage"
                        src={`${BACKEND}/${data.avatar}`}
                      />
                    )}
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

const mapStateToProps = state => {
  return {
    data: state.blog.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => dispatch(getDetail(id)),
    // postRegister: values => dispatch(postRegister(values))
    editBlog: (values, history) => {
      dispatch(editBlog(values, history));
    }
  };
};

// export default connect(null, mapDispatchToProps)(Register);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageEditBlog)
);
