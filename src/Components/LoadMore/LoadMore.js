import React, { Component } from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';

const LoadMore = () => {
    return (
        <Section className="is-paddingless" style={{ backgroundColor: 'gray' }}>
            <Hero color="default">
                <Hero.Body>
                    <Container>
                        <Columns className="is-centered">
                            <Columns.Column className="is-half">
                                <div className="is-centerd">Load More</div>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default LoadMore;
