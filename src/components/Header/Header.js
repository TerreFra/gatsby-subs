import React, { useContext } from 'react';
import Logo from '../../../static/logoAcan.png';
import SearchBar from '../SearchBar/SearchBar';

import { ThemeContext } from '../Context/ThemeContext';
import { MenuContext } from '../Context/MenuContext';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => {

    // Destructuring useContext.
    const { changeTheme } = useContext(ThemeContext);
    const { acanMenu } = useContext(MenuContext);

    return (
        <div className="nappyNavigation">
            <Navbar expand="lg">
                <Navbar.Brand as={Link} to="/" className="logoPosition">
                    <img src={Logo} alt="logoAcan" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        { acanMenu.map(voice => { return <Nav.Link as={Link} to={Object.values(voice)}>{Object.keys(voice)}</Nav.Link>})}
                    </Nav>
                    <Form inline>
                        <SearchBar />
                        <Form.Check type="switch" id="custom-switch" label
                            onClick={changeTheme}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
