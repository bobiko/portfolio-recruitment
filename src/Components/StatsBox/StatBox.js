import React from 'react';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import '../../styles/components/_statsbox.scss';
import { StatsBoxIcon } from './StatsBoxIcon';

const StatsBox = ({ icon, name, value }) => {
    return (
        <Section className="is-paddingless section-statsbox">
            <Media.Item renderAs="figure" position="left">
                <StatsBoxIcon icon={icon} size="128" />
            </Media.Item>
            <Media.Item>
                <Content>
                    <p className="has-text-weight-bold is-size-5">
                        <strong>{value}</strong>
                    </p>
                    <p className="is-uppercase">{name}</p>
                </Content>
            </Media.Item>
        </Section>
    );
};

export default StatsBox;
