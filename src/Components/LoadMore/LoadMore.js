import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';

const LoadMore = () => {
    return (
        <Section className="is-paddingless">
            <Hero>
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column className="has-text-centered">
                                <Button outlined rounded={false} color="dark" size="medium">
                                    Load More
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default LoadMore;
