import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Landing.css";
import kLogowhite from "./kLogowhite.png";
import { useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
export default function LNavBar(props) {
  const history=useHistory()
  
  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="ln-bg"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand href="#home">
        <img alt="" src={kLogowhite} width={53.34} />
        <text style={{fontFamily:'Cinzel',fontSize:20,color:'white'}}>KASSANDRA</text>
      </Navbar.Brand>
     
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <Link  style={{color:props.element==='APP'?'#F2F2F2':'#C2C2C2'}} 
          to='APP' smooth={true} duration={400} className="nav-tabs nav-link ">Our Apps</Link>
          <Link  style={{color:props.element==='FEATURES'?'#F2F2F2':'#C2C2C2'}} 
          to='FEATURES' smooth={true} duration={400} className="nav-tabs nav-link">Features</Link>
          <Link  style={{color:props.element==='PREV'?'#F2F2F2':'#C2C2C2'}} 
          to='PREV' smooth={true} duration={400} className="nav-tabs nav-link">Preview</Link>
          <Link  style={{color:props.element==='About'?'#F2F2F2':'#C2C2C2'}} 
          to='About' smooth={true} duration={400} className="nav-tabs nav-link">About</Link>
          {/* <NavDropdown title="Option" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">SubOption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SubOption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">SubOption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">SubOption</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
