// import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar as BootstrapNavbar , Nav}  from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import './Navbar.css'
import Money from '../Money/Money';


export default function Navbar() {

  const [balance, setBalance]= useState(0)

  useEffect(()=>{
    callGetBalanceServer();   
  }, []);

  const callGetBalanceServer= async() =>{
    axios.get(`http://localhost:8080/balance`)
    .then((response) =>{
      setBalance(response.data[0]["amount"]);
    })
  }

  return (
    <BootstrapNavbar bg="light" expand="lg" className='navbar'>
      <Container>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ="/" style={{textDecoration: 'none'}}>Home</Link>
            <Link to= "/operations" style={{textDecoration: 'none'}}>Operations</Link>
          </Nav>
            <h4 className="balance ms-auto mr-10">Balance:</h4>
            <Money amount= {balance}/>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}