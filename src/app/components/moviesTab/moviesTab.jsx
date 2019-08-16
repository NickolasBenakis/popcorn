import React, { Component } from 'react';
import MoviesList from '../moviesCard/moviesList';
import fetchMovies from '../../../api/fetchMovies';
import FilterMovies from '../filter/filterMovies';
import './moviesTab.scss';
class MoviesTab extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            searchField: '',
        };
    }

    componentWillMount() {
        this.movies();
    }
    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    movies = async () => {
        const res = await fetchMovies();
        this.setState({ movies: res });
    };
    render() {
        const filteredMovies = this.state.movies.filter(movie =>
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
                    <MoviesList movies={filteredMovies} />
                </div>
            </div>
        );
    }
}

export default MoviesTab;
