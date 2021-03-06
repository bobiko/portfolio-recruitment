import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

const SimpleCard = ({
    title,
    subtitle,
    children,
    size,
    color,
    paddingLess,
    containerClass,
    id,
    ...props
}) => {
    return (
        <Section className={paddingLess && 'is-paddingless'} id={id}>
            <Hero color={color || false} size={size}>
                <Hero.Body>
                    <Container className={containerClass}>
                        {title && <Heading>{title} </Heading>}
                        {subtitle && (
                            <Heading subtitle size={3}>
                                {subtitle}
                            </Heading>
                        )}
                        {children}
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default SimpleCard;
