import React, { useState } from 'react';
// import Button from 'react-bulma-components/lib/components/button';
import Navbar from 'react-bulma-components/lib/components/navbar';

const NavbarMenu = () => {
    const [open, setOpening] = useState(false);
    return (
        <Navbar fixed="top" active={true} transparent={true} className="navbar-transparent">
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/like.svg'}
                        alt="Piroll Design"
                        width="64"
                        height="64"
                    />
                </Navbar.Item>
                <Navbar.Burger active={open} onClick={() => setOpening(!open)} />
            </Navbar.Brand>
            <Navbar.Menu active={open}>
                <Navbar.Container position="end">
                    <Navbar.Item href="#">Home</Navbar.Item>
                    <Navbar.Item href="#">About</Navbar.Item>
                    <Navbar.Item href="#">Work</Navbar.Item>
                    <Navbar.Item href="#">Process</Navbar.Item>
                    <Navbar.Item href="#">Services</Navbar.Item>
                    <Navbar.Item href="#">Testimonials</Navbar.Item>
                    <Navbar.Item href="#">Contact</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarMenu;
