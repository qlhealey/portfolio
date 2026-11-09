import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import About from './About';
import Summary from './Summary';  
import PageTitle from './PageTitle';
import Home from './Home';
import Resume from './Resume';
import Stage from './Stage';
import Lighting from './Lighting';
import Portfolio from './Portfolio';
import Design from './Design';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

  const navLinkStyles =
    ({ isActive }) => ({
      color: 'white',
      textDecoration: isActive ? 'underline' : 'none',
      opacity: isActive ? '1.0' : '0.8',
    });

  return (
    <>



      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand className='col-4'>
            <NavLink to='/summary'><img src='./img/name-transparent.png' align='left' width='auto' height='60px' alt='' /></NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='flex-grow-1'>

              <Nav.Item>
                <NavLink to='/' style={navLinkStyles}>Home</NavLink>
              </Nav.Item>
              
              <Nav.Item>
                <NavLink to='/about' style={navLinkStyles}>About</NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink to='/resume' style={navLinkStyles}>Resume</NavLink>
              </Nav.Item>


              <Nav.Item className='drop'>
                <NavDropdown title='Performing Arts' align='end'>                  
                  


                  <NavDropdown.Item><NavLink to='/stage' style={navLinkStyles}>Stage Management</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to='/lighting' style={navLinkStyles}>Lighting Design</NavLink></NavDropdown.Item>
                </NavDropdown>


                
                
                
              </Nav.Item>

              <Nav.Item>
                <NavLink to='/design' style={navLinkStyles}>Design</NavLink>
              </Nav.Item>
              <Nav.Item >
                <NavLink to='/contact' style={navLinkStyles}>Contact</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>



        </Container>
      </Navbar>




      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/stage' element={<Stage />} />
        <Route path='/lighting' element={<Lighting />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/design' element={<Design />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>


    </>
  )
}
