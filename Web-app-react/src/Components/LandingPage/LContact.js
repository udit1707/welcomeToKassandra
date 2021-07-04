import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import "./Landing.css";
import { useEffect } from "react";
export default function LContact(props) {
  const handler= ()=> {
    var ele=document.getElementById("About");
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    
      
      return (top > 0 || bottom > 0) && top < vHeight-400 ? props.setElement('About'):null
    
  }
  useEffect(() => {
        
    window.addEventListener('scroll', handler);
 
    return () => window.removeEventListener('scroll', handler);
    
  }, []);
  return (
    <div id="About" className="lc-container">
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
                      Web and App developer, Keen Interest in Machine Learning and AI. Curious in Robotics and Mixed Reality
                    </Card.Text>
                   
                    <Card.Link>
                    <a href="https://github.com/arshPratap" target="_blank"><i className="fa fa-github"></i></a>
                    </Card.Link>
                    <Card.Link>
                    <a href="" target="_blank"><i className="fa fa-linkedin"></i></a>
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card style={{flexDirection:'colum',justifyContent:'space-between',display:'flex'}} className="lc-card text-center">
                  <Card.Body>
                    <Card.Title className="lc-card-title">
                      Saksham Tiwari
                    </Card.Title>
                    <Card.Text className="lc-card-text">
                      Web and App developer. Keen Interest in UI / UX design, layouts formation.  Interpret ideas into designs .
                    </Card.Text>
                   
                    <Card.Link>
                      <a href="https://github.com/thebigshotsam" target="_blank"><i className="fa fa-github"></i></a>
                    </Card.Link>
                    <Card.Link>
                      <a href="https://www.linkedin.com/in/saksham-tiwari-6210a1180/" target="_blank"><i className="fa fa-linkedin"></i></a>
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card className="lc-card text-center">
                  <Card.Body>
                    <Card.Title className="lc-card-title">
                      Udit Singh
                    </Card.Title>
                    <Card.Text className="lc-card-text">
                      Backend developer and ML enthusiast. Keen Interest in backend technologies and Cloud Architectures
                    </Card.Text>
                   
                    <Card.Link>
                      <a href="https://github.com/udit1707" target="_blank"><i className="fa fa-github"></i></a>
                    </Card.Link>
                    <Card.Link>
                      <a href="https://www.linkedin.com/in/udit-singh/" target="_blank"><i className="fa fa-linkedin"></i></a>
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
