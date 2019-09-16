import React, { Component, Fragment } from 'react';
import fetchMovieShowings from '../../../api/movieShowing/fetchMovieShowing';
import TheatersList from '../theaters/theatersList';
import Seats from '../seats/seats';
import './bookingTab.scss';
import ConfirmModal from '../modals/confirmModal/confirmModal';

class BookingTab extends Component {
    state = {
        movieShow: null,
        auditorium: null,
        showSeats: false,
        dateTime: '',
        showModal: false,
        seatsSelected: [],
    };

    componentDidMount() {
        this.getMovieShowingsPerMovie();
    }

    toggleSeats = () => {
        this.setState({ showSeats: !this.state.showSeats });
    };

    handleTime = dateTime => {
        this.setState({ dateTime: dateTime });
    };

    handleSubmit = () => {
        console.log('Hello world');
    };

    getMovieShowingsPerMovie = async () => {
        try {
            const movieShowings = await fetchMovieShowings();
            let filteredMovieShow = movieShowings.filter(show => {
                return (
                    show &&
                    show.movie &&
                    show.movie.movieId ===
                        parseInt(window.location.href.split('?q=movieID')[1])
                );
            });
            this.setState({
                movieShow: filteredMovieShow[0],
                auditorium:
                    filteredMovieShow[0] && filteredMovieShow[0].auditorium,
            });
        } catch (error) {
            throw new Error(error);
        }
    };
    componentDidUpdate() {
        console.log(this.state);
    }

    getConfirmationData = data => {
        this.setState({ seatsSelected: data.seatsSelected });
    };
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };
    handleModalClose = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <Fragment>
                <div>
                    <ConfirmModal
                        showModal={this.state.showModal}
                        handleModalClose={this.handleModalClose}
                        model={{
                            seatsSelected: this.state.seatsSelected,
                            dateTime: this.state.dateTime,
                            auditorium: this.state.auditorium,
                            movieShow: this.state.movieShow,
                        }}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div>
                    {this.state.auditorium === null ||
                    this.state.auditorium === undefined ? (
                        <div className="loading-bar"></div>
                    ) : (
                        <div className="parent">
                            <div className="div1 col-xs-12 col-sm-12 col-md-6">
                                <h2 className="step-heading">Choose theater</h2>
                                <div className="flex-center">
                                    <TheatersList
                                        auditoriums={[this.state.auditorium]}
                                        movieShow={this.state.movieShow}
                                        toggleSeats={this.toggleSeats}
                                        handleTime={this.handleTime}
                                    />
                                </div>
                            </div>
                            {this.state.showSeats ? (
                                <div className="div2 col-xs-12 col-sm-12 col-md-6">
                                    <Seats
                                        movieShowingId={
                                            this.state.movieShow &&
                                            this.state.movieShow.movieShowingId
                                        }
                                        dateTime={this.state.dateTime}
                                        auditoriumId={
                                            this.state.auditorium &&
                                            this.state.auditorium.auditoriumId
                                        }
                                        getConfirmationData={
                                            this.getConfirmationData
                                        }
                                        toggleModal={this.toggleModal}
                                    />
                                </div>
                            ) : (
                                <div className="div2"></div>
                            )}
                        </div>
                    )}
                </div>
            </Fragment>
        );
    }
}

export default BookingTab;
