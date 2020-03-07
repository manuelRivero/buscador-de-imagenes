import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import searchIcon from '../../../assets/images/search-icon.jpg';

export default function NavBar() {
  return (
    <>
    
    <Navbar bg="primary"  variant="dark">
    <Navbar.Brand href="#home">
    <img src={searchIcon} style={{width:"2rem"}}  alt="Search LOGO" />
    </Navbar.Brand>
  </Navbar>
    </>
  );
}
