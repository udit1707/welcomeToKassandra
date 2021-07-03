import Container from "react-bootstrap/Container";
import B from '../../Assets/B2B.jpg'
import INV from '../../Assets/INV.jpg'
import M from '../../Assets/mul.jpg'
import E from '../../Assets/emp.jpg'
import E2 from '../../Assets/emp2.jpg'
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import "./Landing.css";
import { useEffect, useState } from "react";
export default function LFeatures(props) {
  const [feature,setFeature]=useState('Business')
  const handler= ()=> {
    var ele=document.getElementById("FEATURES");
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    
      
      return (top > 0 || bottom > 0) && top < vHeight-500 ? props.setElement('FEATURES'):null
    
  }
  useEffect(() => {
        
    window.addEventListener('scroll', handler);
 
    return () => window.removeEventListener('scroll', handler);
    
  }, []);
  return (
    <div id="FEATURES" className="lf-container">
      <Container fluid>
        <div className="lf-jumbo">
          <div>
          <h3 className="lf-h3">FEATURES</h3>
          </div>
          <div>
          <p className="lf-p">
            Kassandra was designed based on input from personal development
            coaches and popular trainers so it offers all required features
          </p>
          </div>
          <div style={{flexDirection:'column',alignItems:'center',width:'100%',display:'flex'}}>
            <div style={{height:10,marginBottom:100,justifyContent:'center',alignItems:'center',width:'100%',display:'flex'}}>
              <div
                variant="tabs"
                // className="justify-content-center nav-tabs"
                style={{flexDirection:'div',justifyContent:'center',display:'flex',height:0}}
                defaultActiveKey=""
                as="ul"
              >
                <div onMouseUpCapture={()=>setFeature('Business')} as="li" className="nav-tabs">
                  <div style={{color:feature === 'Business'?"#00c9db":null,borderBottomColor:feature === 'Business'?"#00c9db":null}} className="nav-tabs nav-link">
                    <div className="fa fa-briefcase lf-fa"></div>
                    BUSSINESS
                  </div>
                </div>
                <div onMouseUpCapture={()=>setFeature('stock')} as="li" className="nav-tabs">
                  <div style={{color:feature === 'stock'?"#00c9db":null,borderBottomColor:feature === 'stock'?"#00c9db":null}} eventKey="link-1" className=" nav-tabs nav-link">
                    <div className="fa fa-th lf-fa"></div>
                    STOCK
                  </div>
                </div>
                <div onMouseUpCapture={()=>setFeature('employ')} as="li" className="nav-tabs ">
                  <div style={{color:feature === 'employ'?"#00c9db":null,borderBottomColor:feature === 'employ'?"#00c9db":null}} eventKey="link-1" className="nav-tabs nav-link">
                    <div className="fa fa-users lf-fa"></div>
                    EMPLOYEES
                  </div>
                </div>
              </div>              
            </div>
            {feature === 'employ'?<div style={{width:'100%',display:'flex',justifyContent:'space-evenly',height:310,marginTop:0}}>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>
                <img src={E} style={{width:'100%',height:'100%'}} />
              </div>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>
                <img src={E2} style={{width:'100%',height:'100%'}} />
              </div>
              
            </div>
          :<div style={{width:'100%',display:'flex',justifyContent:'space-evenly',height:310,marginTop:0}}>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>
                <img src={B} style={{width:'100%',height:'100%'}} />
              </div>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>
                <img src={INV} style={{width:'100%',height:'100%'}} />
              </div>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>
                <img src={M} style={{width:'100%',height:'100%'}} />
              </div>
            </div>}
         
        </div>
        <div className="lf-jumbo lf-app-jumbo">
          <h3 className="lf-h3">APP FEATURES</h3>
          <p className="lf-p">
            Kassandra was designed based on input from personal development
            coaches and popular trainers so it offers all required features
          </p>
          <div>
          <div style={{flexDirection:'column',alignItems:'center',width:'100%',display:'flex'}}>
            <div style={{height:10,marginBottom:100,justifyContent:'center',alignItems:'center',width:'100%',display:'flex'}}>
              <div
                variant="tabs"
                // className="justify-content-center nav-tabs"
                style={{flexDirection:'div',justifyContent:'center',display:'flex',height:0}}
                defaultActiveKey=""
                as="ul"
              >
                <div onMouseUpCapture={()=>setFeature('emp')} as="li" className="nav-tabs">
                  <div style={{color:feature === 'emp'?"#00c9db":null,borderBottomColor:feature === 'emp'?"#00c9db":null}} className="nav-tabs nav-link">
                    <div className="fa fa-briefcase lf-fa"></div>
                    EMPLOYEES
                  </div>
                </div>
                <div onMouseUpCapture={()=>setFeature('emp')} as="li" className="nav-tabs">
                  <div style={{color:feature === 'mix'?"#00c9db":null,borderBottomColor:feature === 'mix'?"#00c9db":null}} eventKey="link-1" className=" nav-tabs nav-link">
                    <div className="fa fa-th lf-fa"></div>
                    MIXED REALITY
                  </div>
                </div>
                </div>              
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',height:200,marginTop:0}}>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>

              </div>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>

              </div>
              <div style={{width:350,height:'100%',backgroundColor:'white'}}>

              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}
