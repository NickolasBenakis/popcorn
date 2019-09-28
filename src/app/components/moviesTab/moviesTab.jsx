import React, { Component } from 'react';
import MoviesList from '../moviesCard/moviesList';
import fetchMovies from '../../../api/movies/fetchMovies';
import FilterMovies from '../filter/filterMovies';
import './moviesTab.scss';
class MoviesTab extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            searchField: ''
        };
    }

    componentDidMount() {
        this.getMovies();
    }
    onSearchChange = event => {
        this.setState({
            searchField: event && event.target && event.target.value
        });
    };

    getMovies = async () => {
        try {
            const res = await fetchMovies();
            this.setState({ movies: res });
        } catch (error) {
            alert('Sorry there was an error. Wanna reload?');
        }
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
                <div id="MovieCards" className="movie-tab-wrapper">
                    {this.state.movies.length ? (
                        <MoviesList movies={filteredMovies} />
                    ) : (
                        <div className="loading-bar"></div>
                    )}
                </div>
            </div>
        );
    }
}

export default MoviesTab;
