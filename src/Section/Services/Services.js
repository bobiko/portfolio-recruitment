import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Service from '../../Components/Service/Service';

const services = [
    {
        icon: 'design',
        title: 'UI / UX Design',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'development',
        title: 'Web Development',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'mobile',
        title: 'App Mobile',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'game',
        title: 'Game Desing',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'seo',
        title: 'Seo / Marketing',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'photography',
        title: 'Photography',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'graphic',
        title: 'Graphic Design',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
    {
        icon: 'illustrations',
        title: 'Illustration',
        desc: 'Qui molestiae sed aut officiis omnis voluptatibus error omnis facilis.',
    },
];
const Items = ({ items }) => {
    return items.map(item => (
        <Columns.Column size={3}>
            <Service {...item} />
        </Columns.Column>
    ));
};
const Services = () => {
    return (
        <Section className="is-paddingless section-service">
            <Hero color="default" size="medium">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Items items={services} />
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Services;
