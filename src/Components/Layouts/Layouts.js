import React, { Fragment } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Header from '../../Section/Header/Header';
import Home from '../../Section/Home/Home';
import About from '../../Section/About/About';
import Work from '../../Section/Work/Work';
import Fade from 'react-reveal/Fade';

const Layouts = () => {
    return (
        <Fragment>
            <Header />
            <Fade lefts>
                <Home />
            </Fade>
            <Fade>
                <About />
            </Fade>
            <Fade left>
                <Work />
            </Fade>
        </Fragment>
    );
};
export default Layouts;
