import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
  const refreshPage = ()=>{
    window.location.reload();
 }
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">My Recipe </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
            
          
          </Form>
          </Nav>
            <Nav className="m-auto">
              
                <Button onClick={refreshPage}>Refresh Page</Button>
            
            </Nav>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}

export default Header
