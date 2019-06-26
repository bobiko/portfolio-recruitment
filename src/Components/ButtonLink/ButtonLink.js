import React from 'react';
import Button from 'react-bulma-components/lib/components/button';

const Link = ({ href, children, className }) => (
    <a className={className} href={href}>
        {children}
    </a>
);

const ButtonLink = ({ children, href, color, size }) => {
    return (
        <Button color={color} renderAs={Link} href={href} size="large">
            {children}
        </Button>
    );
};

export default ButtonLink;
