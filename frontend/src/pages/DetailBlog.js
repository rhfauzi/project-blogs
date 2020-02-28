import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

import { getDetail } from "../actions";

const BACKEND = process.env.REACT_APP_OWN_API;

class DetailBlog extends Component {
  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    // console.log(id, "id");

    this.props.getDetail(id);
  };

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Row style={{ marginTop: "3em" }}>
          {data !== undefined && (
            <Col xs={12} md={12}>
              <h1 style={{ textAlign: "center" }}>{data.judul}</h1>
              <img
                style={{ width: "100%" }}
                alt={data.judul}
                src={`${BACKEND}/${data.avatar}`}
              />
              <p>{data.deskripsi}</p>
            </Col>
          )}
        </Row>
      </Container>
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
    getDetail: id => dispatch(getDetail(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailBlog)
);
