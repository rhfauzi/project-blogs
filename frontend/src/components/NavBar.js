import React, { useState, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logout } from "../actions/users.actions";

const MyNavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.clear();
    props.logout();
    props.history.push("/login");
    window.location.reload();
  };

  return (
    <Fragment>
      <Col lg={12}>
        <Navbar
          style={{
            backgroundColor: "white",
            height: "129px",
            justifyContent: "center",
            color: "black",
            fontFamily: "Poppins, Sans-serif",
            fontSize: "14px",
            fontWeight: "bold"
          }}
          light
          expand="md"
        >
          <Col lg={{ size: 2, offset: 2 }}>
            <NavbarBrand href="/">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt="mylogoku"
              />
            </NavbarBrand>
          </Col>
          <Col lg={{ size: 8, offset: 1 }} style={{ zIndex: "99" }}>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/input-file">
                    Uplod Filestack
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/final-project">
                    Final Project
                  </NavLink>
                </NavItem>

                {props.isLogin ? (
                  <Fragment>
                    <NavItem>
                      <NavLink tag={Link} to="/input-blog">
                        INPUT BLOG
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/blog-users">
                        BLOG USER
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/blog-stack">
                        BLOG USER (FileStack)
                      </NavLink>
                    </NavItem>
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}
              </Nav>
              {props.isLogin ? (
                <NavbarText>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </NavbarText>
              ) : (
                <Fragment>
                  <NavbarText>
                    <NavLink tag={Link} to="/login">
                      Login
                    </NavLink>
                  </NavbarText>
                  <NavbarText>
                    <NavLink tag={Link} to="/register">
                      Register
                    </NavLink>
                  </NavbarText>
                </Fragment>
              )}
            </Collapse>
          </Col>
          <Col lg={2}></Col>
        </Navbar>
      </Col>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLogin: state.users.isLogin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyNavBar)
);
