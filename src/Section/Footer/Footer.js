import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

const Footer = () => {
    return (
        <Section className="is-paddingless section-footer">
            <Hero>
                <Hero.Body>
                    <Container>
                        <Columns className="">
                            <Columns.Column size={5}>
                                <Heading size={4} style={{ color: '#fff' }}>
                                    Piroll Design
                                </Heading>
                                <Content size="small">
                                    <p>&copy; Piroll. All right reserved.</p>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Content size="small">
                                    <p>Hello@pirolltheme.com</p>
                                    <p>+44 987 065 908</p>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Content size="small">
                                    <nav>
                                        <Columns>
                                            <Columns.Column>
                                                <li>
                                                    <a href="#projects">Projects</a>
                                                </li>
                                                <li>
                                                    <a href="#about">About</a>
                                                </li>
                                                <li>
                                                    <a href="#services">Services</a>
                                                </li>
                                                <li>
                                                    <a href="#carreer">Carreer</a>
                                                </li>
                                            </Columns.Column>
                                            <Columns.Column>
                                                <li>
                                                    <a href="#projects">News</a>
                                                </li>
                                                <li>
                                                    <a href="#news">Events</a>
                                                </li>
                                                <li>
                                                    <a href="#about">Contact</a>
                                                </li>
                                                <li>
                                                    <a href="#legal">Legals</a>
                                                </li>
                                            </Columns.Column>
                                        </Columns>
                                    </nav>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={1}>
                                <Content size="small">
                                    <nav>
                                        <li>
                                            <a href="https://facebook.com">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="#t">Twiiter</a>
                                        </li>
                                        <li>
                                            <a href="#i">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="#d">Dribble</a>
                                        </li>
                                    </nav>
                                </Content>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Footer;
