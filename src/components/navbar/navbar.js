import './navbar.css';
import { Button, Col, Container, Form, InputGroup, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import githubLogo from '../../assets/logos/github.svg'
import linkedInLogo from '../../assets/logos/linkedin.svg'

function NavBar() {
  return (
    <Navbar className="my-navbar justify-content-between">
      <Container >
      <Navbar.Brand class="my-name" href="#home">Gabriel Ragy</Navbar.Brand>
      <Nav className="titles">
            <Nav.Link class="my-link" href="#home">Home</Nav.Link>
            <Nav.Link class="my-link" href="#link">About</Nav.Link>
            <Nav.Link class="my-link" href="#home">Tech Stack</Nav.Link>
            <Nav.Link class="my-link" href="#link">Projects</Nav.Link>
            <Nav.Link style={{paddingRight: "40px"}} class="my-link" href="#home">Contact</Nav.Link>
            <img src={githubLogo} alt="GitHub"></img>
            <img src={linkedInLogo} alt="GitHub"></img>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
