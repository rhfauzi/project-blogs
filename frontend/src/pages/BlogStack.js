import React, { Component } from "react";
import { connect } from "react-redux";
import { CardImg, Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getBlogStack } from "../actions";

const BACKEND = process.env.REACT_APP_OWN_API;

class BlogStack extends Component {
  componentDidMount = () => {
    this.props.getBlogStack();
  };

  handleDelete = e => {
    this.props.deleteBlog(e);
  };

  render() {
    // console.log(this.props);
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
          <Row>
            {Array.isArray(blog) &&
              blog.map(item => {
                return (
                  <Col key={item._id} md="12" sm="12" xs="12" className="cardz">
                    <Row>
                      <Col md="3" sm="3" xs="3">
                        <CardImg
                          top
                          width="100%"
                          src={`${BACKEND}/${item.avatar}`}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md="3" sm="3" xs="3">
                        <h1>{item.judul}</h1>
                      </Col>

                      <Col md="6" sm="6" xs="6">
                        <Button color="secondary">
                          <Link
                            to={`/blog/${item._id}`}
                            style={{ color: "white" }}
                          >
                            Detail
                          </Link>
                        </Button>
                        <Button color="success">
                          <Link
                            to={`/edit-blog/${item._id}`}
                            style={{ color: "white" }}
                          >
                            Edit
                          </Link>
                        </Button>
                        <Button color="danger">
                          <Link
                            to="/#"
                            onClick={() => {
                              this.handleDelete(item._id);
                            }}
                            style={{ color: "white" }}
                          >
                            Delete
                          </Link>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                );
              })}
          </Row>
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
    getBlogStack: () => {
      return dispatch(getBlogStack());
    },

    deleteBlog: id => dispatch(deleteBlog(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogStack);
