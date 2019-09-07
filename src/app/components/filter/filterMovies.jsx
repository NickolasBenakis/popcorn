import React from 'react';
import './filterMovies.scss';

function FilterMovies({ searchChange }) {
    return (
        <div id="filterContainer">
            <ion-icon name="search" class="vert-mid"></ion-icon>
            <input id="filter" type="search" onChange={searchChange} />
        </div>
    );
}
export default FilterMovies;
