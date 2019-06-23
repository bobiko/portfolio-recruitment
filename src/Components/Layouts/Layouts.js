import React, { Fragment } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Header from '../../Section/Header/Header';
import Home from '../../Section/Home/Home';

const Layouts = () => {
    return (
        <Fragment>
            <Container breakpoint="fullhd">
                <Header />
                <Heading subtitle renderAs="p">
                    Container
                </Heading>
            </Container>
            <Home />
        </Fragment>
    );
};
export default Layouts;
