import React, { useEffect, useState, Fragment } from 'react';
import TheatersList from './theatersList.js';
import fetchAuditoriums from '../../../api/fetchAuditoriums';
import '../moviesTab/moviesTab.scss';

function TheatersTab() {
    const [auditoriums, setAuditoriums] = useState([]);

    // like componentDidMount
    useEffect(() => {
        getAuditoriums();
    }, []);

    const getAuditoriums = async () => {
        const res = await fetchAuditoriums();
        setAuditoriums(res);
    };

    return (
        <Fragment>
            <div id="MovieCards">
                {auditoriums.length ? (
                    <TheatersList auditoriums={auditoriums} />
                ) : (
                    <div className="loading-bar"></div>
                )}
            </div>
        </Fragment>
    );
}

export default TheatersTab;
