import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
const ReservationInfo = ({ reservation }) => {
    const { auditorium } = reservation.movieShowing;
    const { movie } = reservation.movieShowing;
    const { firstName, email } = reservation.user;

    return (
        <Fragment>
            <div>{reservation.bookingDateTime}</div>
            <div className="row container">
                <div className="col-6">
                    <img src="" alt="" />
                    <ul>
                        <li>{movie.title}</li>
                        <li>{auditorium.name}</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Reservation made by {firstName + '\n' + email}</li>
                    </ul>
                </div>
            </div>
            <div className="row container">
                <Button variant="btn btn-primary">check-in</Button>
            </div>
        </Fragment>
    );
};

export default ReservationInfo;
