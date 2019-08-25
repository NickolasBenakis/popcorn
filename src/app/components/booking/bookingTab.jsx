import React, { Component } from 'react';
import fetchMovieShowings from '../../../api/fetchMovieShowing';

class BookingTab extends Component {
    state = {
        movieShow: null,
    };
    componentDidMount() {
        this.getMovieShowingsPerMovie();
    }
    getMovieShowingsPerMovie = async () => {
        const movieShowings = await fetchMovieShowings();

        let filteredMovieShow = movieShowings.filter(show => {
            return (
                show.movie.movieId ===
                parseInt(window.location.href.split('?q=')[1])
            );
        });
        this.setState({ movieShow: filteredMovieShow });
        console.log(this.state.movieShow);
    };

    render() {
        return <div></div>;
    }
}

export default BookingTab;
