import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/footerHome.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function FooterHome() {
  const classes = useStyles();
  return (
    <div className="bgFooter fontFamily">
      <Container>
        <div>
          <Row>
            <Col sm="4">
              <h4 className="titleFont">VISIT OUR FARM</h4>
              <hr />
              <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
              <p>
                Weekdays:08:00am - 08:00pm
                <br />
                Weekends:10:00am - 06:00pm
              </p>
            </Col>
            <Col sm="3">
              <h3 className="titleFont">QUICK LINKS</h3>
              <hr />
              <a href="#home">HOME</a>
              <br />

              <a href="#about">ABOUT</a>
              <br />

              <a href="#team">TEAM</a>
              <br />

              <a href="#gallery">GALLERY</a>
              <br />

              <a href="#blog">BLOG</a>
              <br />

              <a href="#contacts">CONTACTS</a>
              <br />
            </Col>
            <Col>
              <h3 className="titleFont">GET IN TOUCH</h3>
              <hr />
              <p>
                Subscribe to our newsletter to receive weekly news, updates,
                special offers, and excluxive discounts.
                <br />
              </p>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Enter your email"
                  style={{ color: "white" }}
                />
                <Button variant="contained" color="secondary">
                  Subscribe
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="copyRight">
        <p className="copyRightP">
          © 2020 All rights reserved. Design by Lockheed
        </p>
      </div>
    </div>
  );
}
