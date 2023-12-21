import './navbar.css';
import { Button, Col, Container, Form, InputGroup, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import githubLogo from '../../assets/logos/github.svg'
import linkedInLogo from '../../assets/logos/linkedin.svg'

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Nav className="titles">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Tech Stack</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <img src={githubLogo} alt="GitHub"></img>
            <img src={linkedInLogo} alt="GitHub"></img>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
