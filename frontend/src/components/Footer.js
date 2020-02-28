import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
function MyFooter() {
  return (
    <div style={{ marginTop: "40px", marginBottom: "25px", color: "#131313" }}>
      <Container>
        <Row>
          <Col lg={{ size: 4 }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="mymainlogo"
            />
            <p style={{ margin: "15px 0" }}>Weekdays: 08:00am - 08:00pm</p>
            <p style={{ margin: "15px 0" }}>Weekdays: 08:00am - 08:00pm</p>
          </Col>
          <Col lg={{ size: 4 }}>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#131313",
                fontFamily: "lato,sanserif"
              }}
            >
              CONTACT
            </p>
            <div
              style={{
                fontSize: "14px",
                color: "#131313",
                fontFamily: "lato,sanserif"
              }}
            >
              <div style={{ width: "30px", float: "left" }}>
                <i className="fas fa-map-marker-alt fa-1x"></i> <br />
                <br />
                <i className="fas fa-phone-square"></i>
                <br />
                <br />
                <i className="far fa-envelope fa-1x"></i> <br />
              </div>
              <div style={{ float: "left", width: "calc(100% - 40px)" }}>
                523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA
                <br />
                (+62)878-852-72244
                <br /> (+62)852-12-886886
                <br />
                template@yahoo.id
                <br />
              </div>
            </div>
          </Col>
          <Col lg={{ size: 4 }}>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#131313",
                fontFamily: "lato,sanserif"
              }}
            >
              GET IN TOUCH
            </p>
            <p>
              Subscribe to our newsletter to receive weekly news, updates,
              special offers, and exclusive discounts.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
                gridColumnGap: "5px"
              }}
            >
              <div>
                <Form>
                  <FormGroup>
                    <Input
                      style={{ fontFamily: "lato,sanserif", fontSize: "12px" }}
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="please put your email"
                    />
                  </FormGroup>
                </Form>
              </div>
              <div>
                <Button
                  style={{
                    fontFamily: "lato,sanserif",
                    backgroundColor: "red",
                    color: "white"
                  }}
                >
                  SUBCSCRIBE
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
