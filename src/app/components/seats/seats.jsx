import React, { useState, useEffect, Fragment } from 'react';
import SeatPicker from 'react-seat-picker';
import fetchSeatsReserved from '../../../api/seatsReserved/fetchSeatsReserved';
import fetchSeats from '../../../api/seats/fetchSeats';
import {
    reduceValuesToSingleOnes,
    splitIntoNestedArrays,
} from '../../utils/arrayUtils';

function Seats({ movieShowingId, auditoriumId, dateTime }) {
    const [seatRows, setSeatRows] = useState([]);
    const [seatsReserved, setSeatsReserved] = useState([]);
    const [finalRows, setFinalRows] = useState([]);

    useEffect(() => {
        Promise.all([getSeats(), getSeatsReserved()]);
    }, []);

    useEffect(() => {
        if (seatRows.length) {
            const arrayOfIDs = seatsReserved.map(seat => {
                return seat.seat.seatId;
            });
            const finalRowModel = arrayOfIDs.map(id =>
                seatRows.flat().map(reservedSeat => {
                    if (id === reservedSeat.seatId) {
                        reservedSeat.isReserved = true;
                    }
                    return reservedSeat;
                })
            );
            const formattedRows = splitIntoNestedArrays(
                finalRowModel[0],
                reduceValuesToSingleOnes(finalRowModel[0], 'seatRow'),
                'seatRow'
            );
            setFinalRows(formattedRows);
        }
    }, [seatsReserved]);

    const getSeatsReserved = async () => {
        const seatsReserved = await fetchSeatsReserved(
            movieShowingId,
            dateTime
        );
        setSeatsReserved(seatsReserved);
    };
    const getSeats = async () => {
        const seatsResponse = await fetchSeats(auditoriumId);
        const seats = seatsResponse.map(el => {
            return {
                seatId: el.seatId,
                seatRow: el.seatRow,
                number: el.seatNumber,
                isReserved: el.seatsReserved,
            };
        });
        const formattedRows = splitIntoNestedArrays(
            seats,
            reduceValuesToSingleOnes(seats, 'seatRow'),
            'seatRow'
        );
        setSeatRows(formattedRows);
    };

    return (
        <Fragment>
            <div>
                {finalRows.length ? (
                    <span>
                        <h2 className="step-heading">Choose seat</h2>
                        <div className="seats">
                            <SeatPicker
                                rows={finalRows}
                                maxReservableSeats={3}
                                alpha
                                visible
                                selectedByDefault
                            />
                        </div>
                    </span>
                ) : (
                    <span></span>
                )}
            </div>
        </Fragment>
    );
}

export default Seats;
