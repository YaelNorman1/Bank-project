import Container from 'react-bootstrap/Container';
import {Navbar as BootstrapNavbar , Nav}  from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import '../Navbar/Navbar.css'
import Money from '../Money/Money';


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
            <Link to ="/" className='link' >Home</Link>
            <Link to= "/operations" className='link' >Operations</Link>
            <Link to= "/breakdown" className='link' >BreakDown</Link>
          </Nav>
            <h4 className="balance ms-auto mr-10">Balance:</h4>
            <Money amount= {props.balance}/>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}