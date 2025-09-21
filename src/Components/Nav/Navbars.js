import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assite/logo.png'
import './Navbars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
function Navbars() {
  return (
    <Navbar expand="lg">
      <Container>

        <Navbar.Brand >
          <img src={logo} title='logo'/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link className='active'>Home</Nav.Link>
        
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ'S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bookin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">login / Register</NavDropdown.Item>     
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Service Details</NavDropdown.Item>     
            </NavDropdown>

            
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>     
            </NavDropdown>

            <Nav.Link >Contact us</Nav.Link>
            <Nav.Link ><FontAwesomeIcon icon={faSearch}/></Nav.Link>
            <Nav.Link className='phon' >
              <FontAwesomeIcon icon={faPhone}/>
               (+01) 999 888 777</Nav.Link>
            <Nav.Link >
              <button>contact us </button>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;