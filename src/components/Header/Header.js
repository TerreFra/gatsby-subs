import React, { useContext } from 'react';
import Logo from '../../../static/logoAcan.png';
import SearchBar from '../SearchBar/SearchBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../Context/ThemeContext';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => {

    // Destructuring useContext.
    const { changeTheme, isDark } = useContext(ThemeContext);

    // Menu Acan.
    const acanMenu = [ {'Projects' : 'projects'}, {'Special Thanks' : 'special_thanks'}, {'About Us': 'about_us' } ];

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
                        <FontAwesomeIcon className="switcherIcons mx-2" icon={faMoon} />
                        <Form.Check type="switch" id="custom-switch" label
                            onClick={changeTheme} 
                            checked={isDark ? false : true }
                        />
                        <FontAwesomeIcon className="switcherIcons" icon={faSun} />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
