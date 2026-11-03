import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Stage from './Stage';
import Lighting from './Lighting';
import Contact from './Contact';
import Summary from './Summary';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
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

    
      
        <Navbar>



          <Nav className='col-12' navbarScroll>
            <Nav.Item className='col-2'>
              <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            </Nav.Item>
            <Nav.Item className='col-2'>
              <NavLink to='/resume' style={navLinkStyles}>Resume</NavLink>
            </Nav.Item>

            <Navbar.Brand className='col-4'>
              <NavLink to='/summary'><img src='./img/name-monogram.png' width='auto' height='60px' alt='' /></NavLink>
            </Navbar.Brand>


            <Nav.Item className='col-2'>
              <NavDropdown title='Portfolio' align='end' className='portfolio' >


                <NavDropdown.Item><NavLink to='/stage' style={navLinkStyles}>Stage Management</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/lighting' style={navLinkStyles}>Lighting Design</NavLink></NavDropdown.Item>


              </NavDropdown>
            </Nav.Item>
            <Nav.Item className=' col-2'>
              <NavLink to='/contact' style={navLinkStyles}>Contact</NavLink>
            </Nav.Item>
          </Nav>



        </Navbar>

        


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/stage' element={<Stage />} />
          <Route path='/lighting' element={<Lighting />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>

        <Footer />
      
    </>
  )
}
