import React, { useEffect, useState, Fragment } from 'react';
import TheatersList from './theatersList.js';
import fetchAuditoriums from '../../../api/auditoriums/fetchAuditoriums';
import '../moviesTab/moviesTab.scss';
import errorHandling from '../../services/errorHandling';

function TheatersTab() {
    const [auditoriums, setAuditoriums] = useState([]);

    useEffect(() => {
        getAuditoriums();
    }, []);

    const getAuditoriums = async () => {
        try {
            const res = await fetchAuditoriums();
            setAuditoriums(res);
        } catch (error) {
            errorHandling();
        }
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
