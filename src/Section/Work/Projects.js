import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Project from '../../Components/Project/Project';
import LoadMore from '../../Components/LoadMore/LoadMore';

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

const Projects = () => {
return (
        <Section className="is-paddingless section-work">
            <Hero  size="default">
                <Hero.Body className="is-paddingless">
                    <Container>
                        <Columns gapless>
                            <Project items={projects} limit={8} />
                        </Columns>
                        <LoadMore />
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
};

export default Projects;
