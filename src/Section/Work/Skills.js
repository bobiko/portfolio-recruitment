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
        <Section className="is-paddingless has-bg-img section-skills">
            <Hero size="large">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column size={4}>
                                <Heading>Professional Skills </Heading>
                                <Content>
                                    <ProgressBar
                                        name="UI/UX Design"
                                        value={75}
                                        max={100}
                                        size="small"
                                        color="primary"
                                        className="is-small-2x"
                                    />
                                    <ProgressBar
                                        name="Web Development"
                                        value={90}
                                        max={100}
                                        size="small"
                                        color="primary"
                                        className="is-small-2x"
                                    />
                                    <ProgressBar
                                        name="Marketing"
                                        value={65}
                                        max={100}
                                        size="small"
                                        color="primary"
                                        className="is-small-2x"
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
