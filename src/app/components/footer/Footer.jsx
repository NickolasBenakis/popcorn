import React, { Fragment } from 'react';
import './Footer.scss';
import popCornLogo from '../../../assets/logos/popcorn2.svg';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer-section">
                <div className="product-container layout-footer">
                    <div className="popcorn-big-logo col-4">
                        <img
                            src={popCornLogo}
                            className="App-logo"
                            alt="logo"
                        />
                    </div>
                    <div className="product-details col-8">
                        <ul className="product-details__list">
                            <li>
                                <h5 className="details-title">PRODUCT</h5>
                                <ul className="details-title__list">
                                    <h6>This is an Online Booking System</h6>
                                </ul>
                            </li>
                            <li>
                                <h5 className="details-title">ABOUT US</h5>
                                <ul className="details-title__list">
                                    <li>Backend Engineer - Panos Onasis</li>
                                    <li>Frontend Engineer - Nick Benakis</li>
                                    <li>Machine Learning - Manos Adam.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
