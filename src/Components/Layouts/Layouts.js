import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../../Section/Header/Header';
import Home from '../../Section/Home/Home';
import About from '../../Section/About/About';
import Work from '../../Section/Work/Work';
import Proccess from '../../Section/Process/Proccess';
import Services from '../../Section/Services/Services';
import Testimonials from '../../Section/Testimonials/Testimonials';
import Brands from '../../Section/Brands/Brands';
import Contact from '../../Section/Contact/Contact';
import Footer from '../../Section/Footer/Footer';

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
            <Fade>
                <Proccess />
            </Fade>
            <Fade>
                <Services />
            </Fade>
            <Fade>
                <Testimonials />
            </Fade>
            <Fade>
                <Brands />
            </Fade>
            <Fade>
                <Contact />
            </Fade>
            <Footer />
        </Fragment>
    );
};
export default Layouts;
