import React, { Component, Fragment } from 'react';

const ReservationInfo = ({ reservation }) => {
    return (
        <Fragment>
            <div>{reservation.bookingDateTime}</div>
        </Fragment>
    );
};

export default ReservationInfo;
