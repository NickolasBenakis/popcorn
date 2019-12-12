import React, { Fragment, useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import defaultImgMovie from '../../../../assets/defaultMovie.jpg';

const ReservationInfo = ({ reservation }) => {
    const { auditorium } = reservation.movieShowing;
    const { movie } = reservation.movieShowing;
    const { firstName, email } = reservation.user;
    const { reservationId } = reservation;
    const { bookingDateTime } = reservation;
    const [status, setStatus] = useState(false);
    const { checkedInReservation } = reservation;

    const handleCheckIn = async () => {
        const payload = {
            bookingDateTime: bookingDateTime,
            Reservation: {
                reservationId: reservationId
            }
        };
        let res = await fetch(
            'http://localhost:5000/popCornCinemaApi/CheckedInReservations/AddCheckedInResAsync',
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json());
        if (res) {
            setStatus(true);
        }
    };

    return (
        <Fragment>
            <div className="row container">
                <div className="col-12 col-sm-4">
                    <div className="row">
                        <img
                            src={
                                movie.imageUrl
                                    ? movie.imageUrl
                                    : defaultImgMovie
                            }
                            alt="movie-poster"
                            className="movie-poster"
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <ul className="text-left info">
                            <li>Id : {reservationId}</li>
                            <li>Movie: {movie.title}</li>
                            <li>Theater: {auditorium.name}</li>
                            <li>
                                Reservation by <strong>{firstName}</strong>
                            </li>
                            <li>
                                <strong>{email}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row container justify-content-end p-10-0-25-0 button-res">
                {status || checkedInReservation ? (
                    <Alert variant={'success'}>Checked!</Alert>
                ) : (
                    <Button
                        variant="btn btn-primary "
                        onClick={handleCheckIn}
                        disabled={status}>
                        check-in
                    </Button>
                )}
            </div>
        </Fragment>
    );
};

export default ReservationInfo;
