// import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar as BootstrapNavbar , Nav}  from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css'



export default function Navbar() {

  return (
    <BootstrapNavbar bg="light" expand="lg" className='navbar'>
      <Container>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ="/">Home</Link>
            <h4 className="balance ms-auto mr-10">Balance:</h4>
          </Nav>
          
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}