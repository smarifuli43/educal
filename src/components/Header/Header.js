import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
      fontWeight: 'bold',
      color: '#5C2EDE',
    };
  return (
    <div>
      <Navbar bg='light' expand='md' className='py-4'>
        <Container>
          <NavLink
            to='/home'
            style={{ textDecoration: 'none', color: '#5C2EDE', fontWeight:'bold' }}
          >
           Educal
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto nav'>
              <NavLink activeStyle={activeStyle} to='/home' className='nav'>
                Home
              </NavLink>
              <NavLink activeStyle={activeStyle} to='/about' className='nav'>
                About
              </NavLink>
              <NavLink activeStyle={activeStyle} to='/service' className='nav'>
                Services
              </NavLink>
              <NavLink activeStyle={activeStyle} to='contact' className='nav'>
                Contact us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;