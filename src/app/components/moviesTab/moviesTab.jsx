import React, { Component } from 'react'
import MoviesList from '../moviesCard/moviesList';
import { mockMovies } from '../../../api/mockMovies';
import FilterMovies from '../filter/filterMovies';
class MoviesTab extends Component {



    render() {
        return (
            <div id="MovieTab">

                <hr />
                <FilterMovies />
                <div id="chooseTypeOfMovie">
                    <ul style={{ listStyle: "none", padding: "0", margin: "auto" }}>
                        <li style={{ display: "inline-block", margin: "10px" }}><a href="1" style={{ textDecoration: "none" }}>Playing Now</a></li>
                        <li style={{ display: "inline-block", margin: "10px" }}><a href="2" style={{ textDecoration: "none" }}>Coming Soon</a> </li>
                    </ul>
                </div>
                <div id="MovieCards">
                    <MoviesList mockMovies={mockMovies} />
                </div>
            </div>
        )
    }
}

export default MoviesTab;