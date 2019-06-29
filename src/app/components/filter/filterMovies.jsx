import React from 'react'
import './filterMovies.scss'

export default function FilterMovies() {
    return (
        <div id="filterContainer">
            <ion-icon name="search"></ion-icon>
            <input id="filter" type="text" />
        </div>
    )
}
