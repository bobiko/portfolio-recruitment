import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import StatsBox from '../../Components/StatsBox/StatBox';

const details = [
    { name: 'Projects Completed', value: 548, icon: 'work' },
    { name: 'Working Hours', value: 1465, icon: 'clock' },
    { name: 'Positive Feedbacks', value: 612, icon: 'star' },
    { name: 'Happy Clients', value: 735, icon: 'heart' },
];

const Stat = ({ items }) => {
    return items.map((item, i) => (
        <Columns.Column>
            <StatsBox key={Math.random()} {...item} />
        </Columns.Column>
    ));
};

const Stats = () => {
    return (
        <Section className="is-paddingless">
            <Hero color="primary">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Stat items={details} />
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Stats;
