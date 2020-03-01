import React, { useContext } from 'react';
import { ThemeContext } from  '../Context/ThemeContext';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => {

    // Destructuring useContext.
    const { handleMenuChange, whatMenu, nappyMenu, acanMenu, changeTheme } = useContext(ThemeContext);

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">NappySubs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link as={Link} onClick={handleMenuChange} to="#">Nappy</Nav.Link>
                    <Nav.Link as={Link} onClick={handleMenuChange} to="#">Acan</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    { whatMenu === 'Nappy' && nappyMenu.map(voice => { return <Nav.Link as={Link} to="/nappy">{voice}</Nav.Link> }) }
                    { whatMenu === 'Acan' && acanMenu.map(voice => { return <Nav.Link as={Link} to="/nappy">{voice}</Nav.Link> }) }
                </Nav>
                <Form inline>
                <Form.Check type="switch" id="custom-switch" label 
                            onClick={changeTheme}
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
    );
};

export default Header;
