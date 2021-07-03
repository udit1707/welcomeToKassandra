import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Landing.css";
import { useEffect } from "react";

export default function LPreview(props) {
  const handler= ()=> {
    var ele=document.getElementById("PREV");
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    
      
      return (top > 0 || bottom > 0) && top < vHeight-400 ? props.setElement('PREV'):null
    
  }
  useEffect(() => {
        
    window.addEventListener('scroll', handler);
 
    return () => window.removeEventListener('scroll', handler);
    
  }, []);
  return (
    <div id="PREV" className="lp-container">
      <Container fluid>
        <Jumbotron className="lp-jumbo">
          <h3 className="lp-h3">PREVIEW</h3>
          <p style={{marginTop:10,fontFamily:'Segoe UI'}}  className="lp-p">
            It's time to target the right customers for your business with the
            <text style={{fontFamily:'Cinzel', fontWeight:'bold',wordSpacing:'5px',color:'black',fontSize:19.6}}> Kassandra's </text> powerful and efficient Retail Management Gateway
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
