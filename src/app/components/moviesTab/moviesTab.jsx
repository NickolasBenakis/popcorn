import React, { Component } from 'react';
import MoviesList from '../moviesCard/moviesList';
import { mockMovies } from '../../../api/mockMovies';
import FilterMovies from '../filter/filterMovies';
import './moviesTab.scss';
class MoviesTab extends Component {
    constructor() {
        super();
        this.state = {
            mockMovies: mockMovies,
            searchField: '',
        };
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const filteredMovies = this.state.mockMovies.filter(movie =>
            movie.title
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase())
        );

        return (
            <div id="MovieTab">
                <hr />
                <FilterMovies searchChange={this.onSearchChange} />
                <div id="chooseTypeOfMovie">
                    <ul>
                        <li>
                            <a href="1">Playing Now</a>
                        </li>
                        <li>
                            <a href="2">Coming Soon</a>
                        </li>
                    </ul>
                </div>
                <div id="MovieCards" className="movie-tab-wrapper">
                    <MoviesList mockMovies={filteredMovies} />
                </div>
            </div>
        );
    }
}

export default MoviesTab;
