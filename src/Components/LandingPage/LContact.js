import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import "./Landing.css";
export default function LContact() {
  return (
    <div className="lc-container">
      <Container fluid>
        <Jumbotron className="lc-jumbo">
          <h3 className="lc-h3">OUR TEAM</h3>
          <p className="lc-p">Feel free to contact our developers</p>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <CardDeck>
                <Card className="lc-card text-center">
                  <Card.Body>
                    <Card.Title className="lc-card-title">
                      Arsh Pratap
                    </Card.Title>
                    <Card.Text className="lc-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Card.Text>
                    <Card.Link>
                      <i className="fa fa-phone"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-envelope"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-whatsapp"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-github"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-linkedin"></i>
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card className="lc-card text-center">
                  <Card.Body>
                    <Card.Title className="lc-card-title">
                      Saksham Tiwari
                    </Card.Title>
                    <Card.Text className="lc-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Card.Text>
                    <Card.Link>
                      <i className="fa fa-phone"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-envelope"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-whatsapp"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-github"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-linkedin"></i>
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card className="lc-card text-center">
                  <Card.Body>
                    <Card.Title className="lc-card-title">
                      Udit Singh
                    </Card.Title>
                    <Card.Text className="lc-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Card.Text>
                    <Card.Link>
                      <i className="fa fa-phone"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-envelope"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-whatsapp"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-github"></i>
                    </Card.Link>
                    <Card.Link>
                      <i className="fa fa-linkedin"></i>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}
