import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">NappySubs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/nappy">Nappy</Nav.Link>
                <Nav.Link as={Link} to="/acan">Acan</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
