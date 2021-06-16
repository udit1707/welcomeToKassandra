import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Landing.css";

export default function LApps() {
  return (
    <div className="la-container">
      <Container fluid>
        <Row className="la-row">
          <Col sm={4}>Hello</Col>
          <Col sm={8}>
            <Jumbotron className="la-jumbo">
              <h1 className="la-h1">TRY OUR COMPANION APPS</h1>
              <p className="la-p">
                We also provide companion apps that would help you use KASSANDRA
                from your phones and enrich your experience{" "}
              </p>
              <h4 className="la-h4">Check them out!</h4>
              <br />
              <div className="text-right">
                <Button variant="outline-info" className="la-button">
                  <i className="fa fa-apple la-fa"></i>
                  For Apple
                </Button>
                <Button variant="outline-info" className="la-button">
                  <i class="fa fa-android la-fa"></i>
                  For Android
                </Button>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
