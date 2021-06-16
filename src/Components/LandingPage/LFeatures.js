import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import "./Landing.css";
export default function LFeatures() {
  return (
    <div className="lf-container">
      <Container fluid>
        <Jumbotron className="lf-jumbo">
          <h3 className="lf-h3">FEATURES</h3>
          <p className="lf-p">
            Kassandra was designed based on input from personal development
            coaches and popular trainers so it offers all required features
          </p>
          <Row>
            <Col>
              <Nav
                variant="tabs"
                className="justify-content-center"
                defaultActiveKey=""
                as="ul"
              >
                <Nav.Item as="li">
                  <Nav.Link href="/home">
                    <i className="fa fa-briefcase lf-fa"></i>
                    BUSSINESS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">
                    <i className="fa fa-th lf-fa"></i>
                    STOCK
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">
                    <i className="fa fa-users lf-fa"></i>
                    EMPLOYEES
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron className="lf-jumbo lf-app-jumbo">
          <h3 className="lf-h3">APP FEATURES</h3>
          <p className="lf-p">
            Kassandra was designed based on input from personal development
            coaches and popular trainers so it offers all required features
          </p>
          <Row>
            <Col>
              <Nav
                variant="tabs"
                className="justify-content-center"
                defaultActiveKey=""
                as="ul"
              >
                <Nav.Item as="li">
                  <Nav.Link href="/home">
                    <i className="fa fa-briefcase lf-fa"></i>
                    BUSSINESS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">
                    <i className="fa fa-th lf-fa"></i>
                    STOCK
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}
