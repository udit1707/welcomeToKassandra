import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Landing.css";
import kLogowhite from "./kLogowhite.png";
export default function LNavBar() {
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
        KASSANDRA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Option</Nav.Link>
          <Nav.Link href="#pricing">Option</Nav.Link>
          <NavDropdown title="Option" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">SubOption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SubOption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">SubOption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">SubOption</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Option</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Option
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
