import React, { Component, Fragment } from 'react';
import TheatersList from './theatersList.js';
import { mockTheaters } from '../../../api/mockTheaters';
import '../moviesTab/moviesTab.scss';
import { Link } from 'react-router-dom';

class TheatersTab extends Component {
    constructor() {
        super();
        this.state = {
            mockTheaters: mockTheaters,
        };
    }

    render() {
        return (
            <Fragment>
                <div id="MovieCards">
                    <TheatersList mockTheaters={mockTheaters} />
                </div>
            </Fragment>
        );
    }
}

export default TheatersTab;
