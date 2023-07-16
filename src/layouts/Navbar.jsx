import Fragment  from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const NavBarExample = () => {
    return (
       <>
       <Navbar bg="light">
        <Container>
         <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> 
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Otra </NavDropdown.Item>
               </NavDropdown>  
             </Nav>  
          </Navbar.Collapse> 
        </Container>
       </Navbar>
       </> 
    )
}