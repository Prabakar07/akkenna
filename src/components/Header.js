import React from 'react'
import { Container,Nav,Navbar,Button } from "react-bootstrap";

const Header = () => {
    return (
        <div className='header_div'>
            <Navbar bg="light" data-bs-theme="light" style={{height:"12vh"}} fixed="top" >
        <Container>
          <Navbar.Brand href="#home" style={{width:"60%"}}><img src='https://www.akkenna.com/static/media/logo.527ce9569c515d13529371370e18d69f.svg'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#home">Animation</Nav.Link>
            <Nav.Link href="#home">Careers</Nav.Link>
            <Nav.Link ><Button>Contact Us</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header
