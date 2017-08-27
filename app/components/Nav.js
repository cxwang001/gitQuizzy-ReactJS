import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

            
const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">GitQuizzly</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">Restart Game</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
    </Nav>
  </Navbar>
);

export default navbarInstance;