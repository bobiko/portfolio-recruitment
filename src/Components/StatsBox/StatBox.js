import React, { Fragment } from 'react';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import Icon from 'react-bulma-components/lib/components/icon';

import '../../styles/components/_statsbox.scss';

const StatsBox = ({ icon, name, value }) => {
    return (
        <Section className="is-paddingless section-statsbox">
            <Media.Item renderAs="figure" position="left">
                <Icon icon={icon} />
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
