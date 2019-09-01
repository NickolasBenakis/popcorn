import React, { Component } from 'react';
import fetchMovieShowings from '../../../api/fetchMovieShowing';
import TheatersList from '../theaters/theatersList';
import Seats from '../seats/seats';
import './bookingTab.scss';
import { idText } from 'typescript';

class BookingTab extends Component {
    state = {
        movieShow: null,
        auditorium: null,
        showSeats: false,
    };

    componentDidMount() {
        this.getMovieShowingsPerMovie();
    }

    toggleSeats = () => {
        this.setState({ showSeats: !this.state.showSeats });
    };

    getMovieShowingsPerMovie = async () => {
        try {
            const movieShowings = await fetchMovieShowings();
            let filteredMovieShow = movieShowings.filter(show => {
                return (
                    show.movie.movieId ===
                    parseInt(window.location.href.split('?q=')[1])
                );
            });
            this.setState({
                movieShow: filteredMovieShow[0],
            });
            this.setState({
                auditorium:
                    filteredMovieShow[0] && filteredMovieShow[0].auditorium,
            });
        } catch (error) {
            throw new Error(error);
        }
    };

    render() {
        return (
            <div>
                {this.state.auditorium === null ||
                this.state.auditorium === undefined ? (
                    <div className="loading-bar"></div>
                ) : (
                    <div className="parent">
                        <div className="div1">
                            <h2 className="step-heading">Choose theater</h2>
                            <div className="flex-center">
                                <TheatersList
                                    auditoriums={[this.state.auditorium]}
                                    movieShow={this.state.movieShow}
                                    toggleSeats={this.toggleSeats}
                                />
                            </div>
                        </div>
                        {this.state.showSeats ? (
                            <div className="div2">
                                <h2 className="step-heading">Choose seat</h2>
                                <div className="seats">
                                    <Seats />
                                </div>
                            </div>
                        ) : (
                            <div className="div2"></div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default BookingTab;
