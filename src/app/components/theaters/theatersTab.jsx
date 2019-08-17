import React, { Component, Fragment } from 'react';
import TheatersList from './theatersList.js';
import fetchAuditoriums from '../../../api/fetchAuditoriums';
import '../moviesTab/moviesTab.scss';

class TheatersTab extends Component {
    constructor() {
        super();
        this.state = {
            auditoriums: [],
        };
    }
    componentWillMount() {
        this.getAuditoriums();
    }
    getAuditoriums = async () => {
        const res = await fetchAuditoriums();
        this.setState({ auditoriums: res });
    };
    render() {
        return (
            <Fragment>
                <div id="MovieCards">
                    <TheatersList auditoriums={this.state.auditoriums} />
                </div>
            </Fragment>
        );
    }
}

export default TheatersTab;
