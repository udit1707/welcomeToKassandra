import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
//import P5Particles from "./P5Particles.js";
import React, { useState, useEffect } from "react";
import kLogo from "./kLogo.png";
import "./Landing.css";
export default function LIntro() {
  const titles = ["MANUFACTURERS", "DISTRIBUTORS", "RETAILERS", "EMPLOYEES"];
  const [visible, setVisible] = useState(true);
  const [titleCount, setTitleCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(visible ? false : true);
      if (visible === false) {
        setTitleCount((titleCount + 1) % 4);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [visible, titleCount]);
  return (
    <div className="li-container">
      <Container fluid>
        <Row className="li-row">
          <Col sm={8}>
            <Jumbotron className="li-jumbo">
              <h1 className="li-h1">
                SOFTWARE FOR
                <br />
                <span className={visible ? "span-fade-in" : "span-fade-out"}>
                  {titles[titleCount]}
                </span>
              </h1>
              <p className="li-p">
                Kassandra is one of the easiest and feature packed marketing
                automation apps in the market. Try it out today!
              </p>
              <Button variant="outline-info" className="li-button">
                Try it Now !
              </Button>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Image src={kLogo} rounded className="li-img" />
            <h1 className="li-logo-text">KASSANDRA</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
