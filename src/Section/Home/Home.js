import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

const Home = () => {
    return (
        <Section className="is-paddingless hero-home">
            <Hero color="primary" size="fullheight is-fullheight-with-navbar">
                <Hero.Body>
                    <Container>
                        <Heading>We Design and Develop </Heading>
                        <Heading subtitle size={3}>
                            lorem
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Home;
