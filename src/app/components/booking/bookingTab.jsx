import React, { Component, Fragment } from 'react';
import fetchMovieShowings from '../../../api/movieShowing/fetchMovieShowing';
import TheatersList from '../theaters/theatersList';
import Seats from '../seats/seats';
import './bookingTab.scss';
import ConfirmModal from '../modals/confirmModal/confirmModal';
import { convertToDateTimeLocale } from '../../utils/dateUtils';
import addReservation from '../../../api/reservations/addReservation';
import ResultModal from '../modals/resultModal/resultModal';
class BookingTab extends Component {
    state = {
        movieShow: null,
        auditorium: null,
        selectedAuditorium: null,
        selectedMovieShow: null,
        showSeats: false,
        dateTime: '',
        bookingDateTime: '',
        showConfirmModal: false,
        showResultModal: false,
        seatsSelected: [],
        confirmationData: {},
        reservationSubmitTimes: 0,
        resultModel: {}
    };

    componentDidMount() {
        this.getMovieShowingsPerMovie();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.confirmationData !== this.state.confirmationData) {
            const res = await addReservation(this.state.confirmationData);
            this.setState({
                resultModel: res,
                showConfirmModal: false,
                showResultModal: true
            });
            console.log('APANTISI', res);
        }
    }

    toggleSeats = () => {
        this.setState({ showSeats: !this.state.showSeats });
    };

    handleTime = dateTime => {
        this.setState({ dateTime: dateTime });
    };

    handleSubmit = () => {
        this.setState({
            confirmationData: {
                user: {
                    userId:
                        parseInt(window.sessionStorage.getItem('userID')) || 1
                },
                MovieShowing: {
                    movieShowingId:
                        this.state.selectedMovieShow &&
                        this.state.selectedMovieShow.movieShowingId
                },
                SeatsReserved: this.state.seatsSelected,
                BookingDateTime: convertToDateTimeLocale(),
                MovieShowingDateTime: this.state.dateTime
            }
        });
        this.setState(prevState => ({
            reservationSubmitTimes: prevState.reservationSubmitTimes + 1
        }));
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
            console.log(movieShowings);
            let theaters = filteredMovieShow.map(el => el.auditorium);
            let movieShows = filteredMovieShow.map(el => el);
            console.log(movieShows);
            this.setState({
                //movieShow: filteredMovieShow[0],
                movieShow: movieShows,
                auditorium:
                    //filteredMovieShow[0] && filteredMovieShow[0].auditorium
                    theaters
            });
        } catch (error) {
            throw new Error(error);
        }
    };

    getSeatsReservedData = data => {
        const seats =
            data.seatsSelected &&
            data.seatsSelected.map(el => {
                return {
                    seat: {
                        id: el.id,
                        row: el.row,
                        number: el.number
                    }
                };
            });
        this.setState({ seatsSelected: seats });
    };
    toggleConfirmModal = () => {
        this.setState({
            showConfirmModal: !this.state.showConfirmModal
        });
    };
    handleConfirmModalClose = () => {
        this.setState({ showConfirmModal: false });
    };
    handleResultModalClose = () => {
        this.setState({ showResultModal: false });
    };
    handleShowing = (auditorium, movieShow) => {
        console.log('auditorium selected', auditorium, movieShow);
        this.setState({
            selectedAuditorium: auditorium,
            selectedMovieShow: movieShow
        });
    };

    render() {
        return (
            <Fragment>
                <div>
                    <ConfirmModal
                        showModal={this.state.showConfirmModal}
                        handleModalClose={this.handleConfirmModalClose}
                        model={{
                            seatsSelected: this.state.seatsSelected,
                            dateTime: this.state.dateTime,
                            auditorium: this.state.selectedAuditorium,
                            movieShow: this.state.selectedMovieShow
                        }}
                        handleSubmit={this.handleSubmit}
                    />
                    <ResultModal
                        showModal={this.state.showResultModal}
                        handleModalClose={this.handleResultModalClose}
                        model={this.state.resultModel}
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
                                        auditoriums={this.state.auditorium}
                                        movieShow={this.state.movieShow}
                                        toggleSeats={this.toggleSeats}
                                        handleTime={this.handleTime}
                                        handleShowing={this.handleShowing}
                                    />
                                </div>
                            </div>
                            {this.state.showSeats ? (
                                <div className="div2 col-xs-12 col-sm-12 col-md-6">
                                    <Seats
                                        movieShowingId={
                                            this.state.selectedMovieShow &&
                                            this.state.selectedMovieShow
                                                .movieShowingId
                                        }
                                        dateTime={this.state.dateTime}
                                        auditoriumId={
                                            this.state.selectedAuditorium &&
                                            this.state.selectedAuditorium
                                                .auditoriumId
                                        }
                                        getSeatsReservedData={
                                            this.getSeatsReservedData
                                        }
                                        toggleModal={this.toggleConfirmModal}
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
