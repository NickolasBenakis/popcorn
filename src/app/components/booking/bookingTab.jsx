import React, { Component } from 'react';
import fetchMovieShowings from '../../../api/fetchMovieShowing';
import TheatersList from '../theaters/theatersList';
import Seats from '../seats/seats';
import './bookingTab.scss';
class BookingTab extends Component {
    state = {
        movieShow: null,
        auditorium: null,
    };
    componentDidMount() {
        this.getMovieShowingsPerMovie();
    }

    getMovieShowingsPerMovie = async () => {
        try {
            const movieShowings = await fetchMovieShowings();

            let filteredMovieShow = movieShowings.filter(show => {
                return (
                    show.movie.movieId ===
                    parseInt(window.location.href.split('?q=')[1])
                );
            });
            this.setState({ movieShow: filteredMovieShow[0] });
            this.setState({
                auditorium:
                    filteredMovieShow[0] && filteredMovieShow[0].auditorium,
            });
        } catch (error) {
            throw new Error(error);
        }
        console.log(this.state.movieShow);
    };

    render() {
        return (
            <div>
                {(this.state && this.state.auditorium === null) ||
                this.state.auditorium === undefined ? (
                    <div className="loading-bar"></div>
                ) : (
                    <div className="parent">
                        <div className="div1">
                            <h2 className="step-heading">Choose theater</h2>
                            <div className="flex-center">
                                <TheatersList
                                    auditoriums={[this.state.auditorium]}
                                />
                            </div>
                        </div>

                        <div className="div2">
                            <h2 className="step-heading">Choose seat</h2>
                            <div className="seats">
                                <Seats />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default BookingTab;
