import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import StatsBox from '../../Components/StatsBox/StatBox';

const projects = [
    { name: 'loremveniam', id: '001' },
    { name: 'adipisci id tempora', id: '002' },
    { name: 'aut-perferendis-aliquam', id: '003' },
    { name: 'id inventore consequatur', id: '004' },
    { name: 'et nemo optio', id: '005' },
    { name: 'totam perferendis consequuntur', id: '006' },
    { name: 'Omnis vel dignissimos adipisci dolor.d', id: '007' },
    { name: 'quaerat ipsum doloresProjects Completed', id: '008' },
    { name: 'eius quisquam repellendus', id: '009' },
    { name: 'Officia consequuntur non velit ad consequatur architecto occaecati.', id: '010' },
    { name: 'qui', id: '011' },
    {
        name: 'Ducimus et perspiciatis dolores possimus tenetur ut non voluptates tempore.',
        id: '012',
    },
];

const Project = ({ items }) => {
    return items.map((item, i) => (
        <Columns.Column size={3}>
            {item.name}{' '}
            <img src={`${process.env.PUBLIC_URL}/assets/projects/${item.id}.jpg`} alt={item.id} />
        </Columns.Column>
    ));
};

const Projects = () => {
    return (
        <Section className="is-paddingless">
            <Hero color="default" size="default">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Project items={projects} />
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Projects;
