import React, { useState } from 'react';
// import Button from 'react-bulma-components/lib/components/button';
import Navbar from 'react-bulma-components/lib/components/navbar';

const menu = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Proccess', href: '#proccess' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

const NavbarMenu = () => {
    const [open, setOpening] = useState(false);
    return (
        <Navbar fixed="top" active={open} transparent={true} className="navbar-transparent">
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
                    {menu.map((item, id) => (
                        <Navbar.Item key={id} href={item.href}>
                            {item.name}
                        </Navbar.Item>
                    ))}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarMenu;
