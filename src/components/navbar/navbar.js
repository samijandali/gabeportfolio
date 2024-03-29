import './navbar.css';
import { Button, Col, Container, Form, InputGroup, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import githubLogo from '../../assets/logos/github.svg'
import linkedInLogo from '../../assets/logos/linkedin.svg'
import React from 'react';

const linkStyle = {
  color: "Black",

}

function NavBar() {
  return (
    <Navbar className="my-navbar justify-content-between">
      <Container>
        <Navbar.Brand class="my-name" style={{ fontSize: "largest" }} href="#home">Gabriel Ragy</Navbar.Brand>
        <Nav className="titles">
          <Nav.Link style={linkStyle} class="my-link" href="#home">Home</Nav.Link>
          <Nav.Link style={linkStyle} class="my-link" href="#link">About</Nav.Link>
          <Nav.Link style={linkStyle} class="my-link" href="#home">Tech Stack</Nav.Link>
          <Nav.Link style={linkStyle} class="my-link" href="#link">Projects</Nav.Link>
          <Nav.Link style={{ paddingRight: "40px", color: "Black" }} class="my-link" href="#home">Contact</Nav.Link>
          <a className='img-button' href='https://github.com/TheFunnyPapa' target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub"></img>
          </a>
          <a className='img-button' href='https://www.linkedin.com/in/gabrielragy/' target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="LinkedIn"></img>
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
