import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import ButtonLink from '../../Components/ButtonLink/ButtonLink';

const Home = () => {
    return (
        <Section className="is-paddingless hero-home">
            <Hero color="default" size="fullheight is-fullheight-with-navbar has-bg-img ">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column size="5" offset="7">
                                <Heading>We Design and Develop </Heading>
                                <Content>
                                    fakerEsse sit numquam molestiae in nostrum modi. Repellat
                                    quae sed accusamus accusamus necessitatibus quaerat sint id
                                    quia. Ut dolores quia illo laudantium consequatur. Ut quia
                                    illo eius et adipisci.
                                </Content>
                                <Content>
                                    <ButtonLink size="large" href="#contact" color="primary" rounded="false">
                                        Contact Us
                                    </ButtonLink>
                                </Content>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Home;
