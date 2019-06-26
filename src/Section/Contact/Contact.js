import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import ContactForm from '../../Components/ContactForm/ContactForm';

const Contact = () => {
    return (
        <Section className="is-paddingless section-contact" id="contact">
            <Hero>
                <Hero.Body>
                    <Container>
                        <form>
                            <Columns className="is-centered">
                                <Columns.Column size={6} className="has-text-centered">
                                    <Heading>Need a Project? </Heading>
                                    <Content size={7}>
                                        Let us know what you're looking for in agency. We'll take a
                                        look and see if this could be the start of something
                                        beautiful.
                                    </Content>
                                    <ContactForm />
                                </Columns.Column>
                            </Columns>
                        </form>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Contact;
