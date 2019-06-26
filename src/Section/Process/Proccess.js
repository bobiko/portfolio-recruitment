import React from 'react';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import Image from 'react-bulma-components/lib/components/image';
import SimpleCard from '../../Components/SimpleCard/SimpleCard';

const Home = () => {
    return (
        <SimpleCard title="Our Work Procces" size="default" containerClass="has-text-centered">
            <Columns>
                <Columns.Column size="half" offset="one-quarter">
                    <Content className="has-text-centered">
                        Ut vel cupiditate eum. Repudiandae maxime aliquam qui quia. Quisquam
                        dolorum recusandae consectetur voluptatem saepe. Illum molestiae modi ut
                        odio expedita quo nobis. Quam eius et amet. Quia quia mollitia.
                    </Content>
                </Columns.Column>
                <Columns.Column size={11} offset={1}>
                    <Content className="has-text-centered">
                        <Image
                            src={process.env.PUBLIC_URL + '/assets/sections/proccess.jpg'}
                            alt="procces"
                        />
                    </Content>
                </Columns.Column>
            </Columns>
        </SimpleCard>
    );
};

export default Home;
