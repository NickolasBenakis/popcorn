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
    componentWillMount() {}
    componentDidMount() {
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
                    {this.state.auditoriums.length ? (
                        <TheatersList auditoriums={this.state.auditoriums} />
                    ) : (
                        <div className="loading-bar"></div>
                    )}
                </div>
            </Fragment>
        );
    }
}

export default TheatersTab;
