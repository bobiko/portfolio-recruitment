import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

const About = () => {
    return (
        <Section className="is-paddingless">
            <Hero color="default" size="medium">
                <Hero.Body>
                    <Container>
                        <Heading>Professional Skills </Heading>
                        <Heading subtitle size={3}>
                            lorem
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default About;
