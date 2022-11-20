// import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar as BootstrapNavbar , Nav}  from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import './Navbar.css'
import Money from '../Money/Money';
// import ApiCall from '../../apiModel/apiEndPoints'

// const api= new ApiCall();

export default function Navbar(props) {

  useEffect(()=>{
    console.log("hello")
    props.updateBalance();   
  }, []);

  return (
    <BootstrapNavbar bg="light" expand="lg" className='navbar'>
      <Container>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ="/" style={{textDecoration: 'none'}}>Home</Link>
            <Link to= "/operations" style={{textDecoration: 'none'}}>Operations</Link>
            <Link to= "/breakdown" style={{textDecoration: 'none'}}>BreakDown</Link>
          </Nav>
            <h4 className="balance ms-auto mr-10">Balance:</h4>
            <Money amount= {props.balance}/>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}