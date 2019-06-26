import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Brand from '../../Components/Brand/Brand';

const brands = [
    {
        title: 'UI / UX Design',
        src: 'brand.jpg',
    },
    {
        title: 'UI / UX Design',
        src: 'brand.jpg',
    },
    {
        title: 'UI / UX Design',
        src: 'brand.jpg',
    },
    {
        title: 'UI / UX Design',
        src: 'brand.jpg',
    },
    {
        title: 'UI / UX Design',
        src: 'brand.jpg',
    },
];
const BrandItems = ({ items }) => {
    return items.map(item => (
        <Columns.Column size={2} narrow>
            <Brand key={Math.random()} {...item} />
        </Columns.Column>
    ));
};
const Brands = () => {
    return (
        <Section className="is-paddingless section-brands">
            <Hero>
                <Hero.Body>
                    <Container>
                        <Columns className="is-centered">
                            <BrandItems items={brands} />
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Brands;
