import React, { Component } from 'react';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel';
import Container from 'react-bulma-components/lib/components/container';

class Testimonials extends Component {
    componentDidMount() {
        bulmaCarousel.attach('#carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
        });
    }

    render() {
        return (
            <Section className="is-paddingless section-testimonials is-clipped">
                <Hero color="primary" size="large" className="has-text-centered">
                    <Hero.Body>
                        <Container>
                            <div id="carousel" className="hero-carousel">
                                <div className="item-1">
                                    <Content>
                                        <p>
                                            Aliquid animi voluptatem neque. Quo qui
                                            voluptatum tenetur aut libero laboriosam veniam.
                                            Rerum dolor doloribus quasi. Ipsum modi aut
                                            eaque quidem ex doloremque quod. Suscipit quo
                                            laudantium. Alias architecto cumque.
                                        </p>
                                    </Content>
                                </div>
                                <div className="item-2">
                                    <Content>
                                        <p>
                                            Porro perferendis aut consequatur suscipit enim
                                            quis laboriosam.
                                        </p>
                                    </Content>
                                </div>
                                <div className="item-3">
                                    Porro perferendis aut consequatur suscipit enim quis
                                    laboriosam.
                                </div>
                            </div>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Section>
        );
    }
}

export default Testimonials;
