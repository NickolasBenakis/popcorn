import React, { PureComponent, Fragment } from 'react';
import './carouselComp.scss';
import Carousel from 'react-bootstrap/Carousel';

import defaultImg from '../../../assets/defaultMarvel.jpg';

class CarouselComp extends PureComponent {
    render() {
        return (
            <Fragment>
                <Carousel className="mainCarousel" interval="3000">
                    <Carousel.Item>
                        <img
                            className="d-block responsive"
                            src="https://hdqwalls.com/download/captain-marvel-5k-poster-oy-1920x1080.jpg"
                            alt={defaultImg}
                        />
                        <Carousel.Caption>
                            {/* <h3>Captain Marvel</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block responsive"
                            src="https://hdqwalls.com/download/toothless-how-to-train-your-dragon-n8-1920x1080.jpg"
                            alt={defaultImg}
                        />
                        <Carousel.Caption>
                            {/* <h3>How to train your Dragon</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block responsive"
                            src="https://i1.imgiz.com/rshots/9469/panic-at-the-disco-bohemian-rhapsody_9469069-60110_1920x1080.jpg"
                            alt={defaultImg}
                        />
                        <Carousel.Caption>
                            {/* <h3>Bohemian Rhapsody</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        );
    }
}

export default CarouselComp;
//Carousel.propTypes = propTypes;
