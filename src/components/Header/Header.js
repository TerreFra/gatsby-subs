import React from 'react';
import { ThemeConsumer } from  '../Context/ThemeContext';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => (
    <ThemeConsumer>
        {theme => (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">NappySubs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link as={Link} onClick={theme.handleMenuChange} to="#">Nappy</Nav.Link>
                    <Nav.Link as={Link} onClick={theme.handleMenuChange} to="#">Acan</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    { theme.whatMenu === 'Nappy' && theme.nappyMenu.map(voice => { return <Nav.Link as={Link} to="/nappy">{voice}</Nav.Link> }) }
                    { theme.whatMenu === 'Acan' && theme.acanMenu.map(voice => { return <Nav.Link as={Link} to="/nappy">{voice}</Nav.Link> }) }
                </Nav>
                <Form inline>
                <Form.Check type="switch" id="custom-switch" label 
                            onClick={theme.changeTheme}
                />
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        )}
    </ThemeConsumer>
);

export default Header;
