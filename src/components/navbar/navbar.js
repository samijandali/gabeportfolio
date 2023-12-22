import './navbar.css';
import { Button, Col, Container, Form, InputGroup, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import githubLogo from '../../assets/logos/github.svg'
import linkedInLogo from '../../assets/logos/linkedin.svg'
import React from 'react';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Gabriel Ragy</Navbar.Brand>
        <Nav className="titles">
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#techstack">Tech Stack</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button className='imageButton' src={githubLogo} alt="GitHub"></Button>
          <img src={linkedInLogo} alt="GitHub"></img>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
