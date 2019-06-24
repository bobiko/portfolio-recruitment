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
                        <Heading>About Us </Heading>
                        <Heading subtitle size={3}>
                            Ea nemo illum quod saepe. Et quasi et cupiditate voluptas aut. Est quae
                            soluta temporibus animi. Voluptate eum ipsam corrupti velit. Aut
                            consequatur quidem.
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default About;
