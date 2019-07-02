import React from 'react';
import './filterMovies.scss';

export default function FilterMovies({ mockMovies, searchChange }) {
    return (
        <div id="filterContainer">
            <ion-icon name="search"></ion-icon>
            <input id="filter" type="search" onChange={searchChange} />
        </div>
    );
}
