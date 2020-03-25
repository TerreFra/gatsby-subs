import React, { useContext } from 'react';
import Logo from '../../../static/logoNappy.png';

import { ThemeContext } from '../Context/ThemeContext';
import { MenuContext } from '../Context/MenuContext';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => {

    // Destructuring useContext.
    const { changeTheme } = useContext(ThemeContext);
    const { handleMenuChange, whatMenu, nappyMenu, acanMenu } = useContext(MenuContext);

    return (
        <div className="nappyNavigation">
            <Navbar expand="lg">
                <Navbar.Brand as={Link} to="/" className="logoPosition">
                    <img src={Logo} alt="logoNappy" style={{ width: '100px' }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} onClick={handleMenuChange} to="#">Nappy</Nav.Link>
                        <Nav.Link as={Link} onClick={handleMenuChange} to="#">Acan</Nav.Link>
                        {whatMenu && <span className="dividerMenu"></span> }
                        {whatMenu === 'Nappy' && nappyMenu.map(voice => { return <Nav.Link as={Link} to="/nappy">{voice}</Nav.Link> })}
                        {whatMenu === 'Acan' && acanMenu.map(voice => { return <Nav.Link as={Link} to="/nappy">{voice}</Nav.Link> })}
                    </Nav>
                    <Form inline>
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
