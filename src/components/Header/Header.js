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
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/nappy">Nappy</Nav.Link>
                    <Nav.Link as={Link} to="/acan">Acan</Nav.Link>
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
