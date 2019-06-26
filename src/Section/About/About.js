import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import Image from 'react-bulma-components/lib/components/image';

const About = () => {
    return (
        <Section className="is-paddingless">
            <Hero color="default" size="medium">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column size="6" offset="3">
                                <Heading>About Us </Heading>
                                <Content>
                                    Ea nemo illum quod saepe. Et quasi et cupiditate voluptas
                                    aut. Est quae soluta temporibus animi. Voluptate eum ipsam
                                    corrupti velit. Aut consequatur quidem.
                                </Content>
                                <Content>
                                    <Image
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/assets/sections/Home-sign.jpg'
                                        }
                                        alt="sign"
                                        size="1x1"
                                    />
                                </Content>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default About;
