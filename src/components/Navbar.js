import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/icons8-uma-64.png';
import navIcon1 from '../assets/img/icons8-linkedin.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-instagram.svg';
import React, { useState,useEffect } from 'react';


function BasicExample() { 

  const[activeLink , setActiveLink]=React.useState('home');
  const[scrolled,setScrolled]= React.useState(false);

  useEffect(() => {
const onScroll = () => {
  if(window.scrolly>50){
    setScrolled(true);
  }else{
    setScrolled(false);
  }
}
  window.addEventListener("scroll",onScroll);
  return() => window.removeEventListener("scroll",onScroll);
  },[])
   
  
    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);                              
    }
  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >   
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='project' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>project</Nav.Link>
          </Nav> 
          <span className='navbar-text'> 
            <div className='social-icon'>
                <a href='#'><img src={navIcon1} alt=''></img></a>
                <a href='#'><img src={navIcon2} alt=''></img></a>
                <a href='#'><img src={navIcon3} alt=''></img></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;