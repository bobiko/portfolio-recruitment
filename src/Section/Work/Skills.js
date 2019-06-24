import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
const Skills = () => {
    return (
        <Section className="is-paddingless">
            <Hero color="default" size="medium">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column size={6}>
                                <Heading>Professional Skills </Heading>
                                <Content subtitle size={5}>
                                    <ProgressBar
                                        name="UI/UX Design"
                                        value="75"
                                        max={100}
                                        size="small"
                                        color="primary"
                                    />
                                    <ProgressBar
                                        name="Web Development"
                                        value="90"
                                        max={100}
                                        size="small"
                                        color="primary"
                                    />
                                    <ProgressBar
                                        name="Marketing"
                                        value="65"
                                        max={100}
                                        size="small"
                                        color="primary"
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

export default Skills;
