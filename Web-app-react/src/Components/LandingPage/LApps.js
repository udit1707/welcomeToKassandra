import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Landing.css";
import { useEffect, useRef } from "react";

export default function LApps(props) {
  const run= ()=> {
    var ele=document.getElementById("APP");
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    console.log((top > 0 || bottom > 0) && top < vHeight);
      
      return (top > 0 || bottom > 0) && top < vHeight-500 ? props.setElement('APP'):null
    
  }
  useEffect(() => {
        
    window.addEventListener('scroll', run);
 
    return () => window.removeEventListener('scroll', run);
    
  }, []);
  
  return (
    <div id="APP" className="la-container">
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
              <div style={{marginTop:10,flexDirection:'row',display:'flex',justifyContent:'flex-end',width:'100%'}}>
                <div style={{width:'20%'}}><text style={{color:'#F5F5F5'}}>Soon</text></div>
                <div style={{width:'15%'}}><text style={{color:'#F5F5F5'}}>Available</text></div>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
