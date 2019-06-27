import React, { Component } from 'react'
import MoviesList from '../moviesCard/moviesList'
import { mockMovies } from '../../../api/mockMovies'
import FilterMovies from '../filter/filterMovies'
import './moviesTab.scss'
class MoviesTab extends Component {
    render() {
        return (
            <div id="MovieTab">
                <hr />
                <FilterMovies />
                <div id="chooseTypeOfMovie">
                    <ul>
                        <li>
                            <a href="1">Playing Now</a>
                        </li>
                        <li>
                            <a href="2">Coming Soon</a>{' '}
                        </li>
                    </ul>
                </div>
                <div id="MovieCards">
                    <MoviesList mockMovies={mockMovies} />
                </div>
            </div>
        )
    }
}

export default MoviesTab
