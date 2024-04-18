import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {
  return (
    <div>
      <Navbar data-bs-theme="dark">
        <Container className='d-flex justify-content-center'> 
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Project</Nav.Link>
            <Nav.Link href="#pricing">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
