import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image, { propTypes } from "react-bootstrap/Image";
//import P5Particles from "./P5Particles.js";
import React, { useState, useEffect, useRef } from "react";
import kLogo from "./kLogo.png";
import "./Landing.css";
import { useHistory } from "react-router-dom";
export default function LIntro(props) {
  const titles = ["MANUFACTURERS", "RETAILERS", "EMPLOYEES"];
  const ref=useRef();
  const [visible, setVisible] = useState(true);
  const [titleCount, setTitleCount] = useState(0);
  const history=useHistory();
  
  const handler= ()=> {
    var ele=document.getElementById("INTRO");
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    
      
      return (top > 0 || bottom > 0) && top < vHeight-200 ? props.setElement('INTRO'):null
    
  }
  useEffect(() => {
        
    window.addEventListener('scroll', handler);
 
    return () => window.removeEventListener('scroll', handler);
    
  }, []);
  return (
    <div id={'INTRO'} className="li-container">
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
              <Button onClick={()=>history.push('/Login',{pressed:'Login'})} variant="outline-info" className="li-button">
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
