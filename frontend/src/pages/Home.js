import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { getBlog } from "../actions";

const BACKEND = process.env.REACT_APP_OWN_API;

class BlogHomeRedux extends Component {
  componentDidMount = () => {
    this.props.getBlog();
  };

  render() {
    const { blog } = this.props;
    return (
      <Container className="themed-container pt-0 px-0 bloghome" fluid={true}>
        <Col md="12" sm="12" xs="12">
          <Row>
            <div className="title" style={{ background: "white" }}>
              <h1>OUR BLOG</h1>
            </div>
          </Row>
        </Col>
        <Container>
          <Col md="12" sm="12" xs="12">
            <Row>
              {Array.isArray(blog) &&
                blog.map(item => {
                  return (
                    <Col key={item._id} md="4" sm="6" xs="12" className="cardz">
                      <Card>
                        <div className="bloghome-img">
                          <CardImg
                            top
                            width="100%"
                            src={`${BACKEND}/${item.avatar}`}
                            alt="Card image cap"
                          />
                        </div>
                        <CardBody>
                          <CardTitle>{item.judul}</CardTitle>
                          <Button color="secondary">
                            <Link
                              to={`/blog/${item._id}`}
                              style={{ color: "white" }}
                            >
                              More
                            </Link>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    blog: state.blog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlog: () => {
      return dispatch(getBlog());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogHomeRedux);
