import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Landing.css";
export default function LFooter() {
  return (
    <div className="lft-container">
      <Container fluid>
        <Row className>
          <Col sm={4} className="lft-col">
            <h6 className="lft-h6">About KASSANDRA</h6>
            <p className="lft-p">
            Kassandra is a set of software applications that aims to provide assistive and guiding features to resellers so that they can more efficiently set up and expand their businesses and trades.
            </p>
          </Col>
          <Col sm={4} className="lft-col">
            <h6 className="lft-h6">Links</h6>
            <p className="lft-p">
              Important: Terms & Conditions, Privacy Policy <br />
              Useful: Colorpicker, Icon Library, Illustrations <br />
              Menu: Article, Features, Pricing, Contact
            </p>
          </Col>
          <Col sm={4} className="lft-col">
            <span className="lft-span">
              <a href="#1">
                <i className="lft-fa fa fa-github"></i>
              </a>
            </span>
            <span className="lft-span">
              <a href="#1">
                <i className="lft-fa fa fa-youtube-play"></i>
              </a>
            </span>
            <span className="lft-span">
              <a href="#1">
                <i className="lft-fa fa fa-windows"></i>
              </a>
            </span>
            <span className="lft-span">
              <a href="#1">
                <i className="lft-fa fa fa-facebook"></i>
              </a>
            </span>
            <span className="lft-span">
              <a href="#1">
                <i className="lft-fa fa fa-instagram"></i>
              </a>
            </span>
            <p className="lft-p">
              We would love to hear from you <br />
              kassandra@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
