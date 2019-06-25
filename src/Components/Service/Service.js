import React, { Fragment } from 'react';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import ServiceIcon from './ServiceIcon';

const Service = ({ icon, title, desc }) => {
    return (
        <Section className="is-paddingless section-service-box">
            <Media.Item renderAs="figure" className="has-text-centered">
                <ServiceIcon icon={icon} size="32" />
            </Media.Item>
            <Media.Item>
                <Content>
                    <p className="has-text-weight-bold is-size-5 has-text-centered"  >
                        <strong>{title}</strong>
                    </p>
                    <p className="has-text-centered">{desc}</p>
                </Content>
            </Media.Item>
        </Section>
    );
};

export default Service;
