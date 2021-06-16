import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Landing.css";

export default function LPreview() {
  return (
    <div className="lp-container">
      <Container fluid>
        <Jumbotron className="lp-jumbo">
          <h3 className="lp-h3">PREVIEW</h3>
          <p className="lp-p">
            It's time to target the right customers for your business with the
            help of Leno's patented user tracking and segmentation technology
          </p>
        </Jumbotron>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <Carousel fade>
              <Carousel.Item
                interval={1200000}
                className="lp-caraousel-container"
              >
                <iframe
                  className="lp-responsive-iframe"
                  src="https://www.youtube.com/embed/cZj05xhaV64?controls=0"
                  title="YouTube video player"
                ></iframe>
                <Carousel.Caption className="lp-caraousel-caption">
                  <h4>KASSANDRA</h4>
                  <p>Take a glimpse of our application</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                interval={1200000}
                className="lp-caraousel-container"
              >
                <iframe
                  className="lp-responsive-iframe"
                  src="https://www.youtube-nocookie.com/embed/kqGc6oeIQ5Y?controls=0"
                  title="YouTube video player 2"
                ></iframe>
                <Carousel.Caption>
                  <h4>KASSANDRA2</h4>
                  <p>Take a glimpse of our application2</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
