import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './filterMovies.scss';


export default function FilterMovies() {
    return (
        <div id="filterContainer">
            <ion-icon name="search"></ion-icon>
            <input id="filter" type="text" />
        </div>
    );

}




