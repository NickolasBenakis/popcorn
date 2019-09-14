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
    const [finalSeatRows, setFinalSeatRows] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);

    useEffect(() => {
        Promise.all([getSeats(), getSeatsReserved()]);
    }, []);

    useEffect(() => {
        console.log('DidUpdate');
        if (seatRows.length && seatsReserved.length) {
            const reservedSeatsIdArray = seatsReserved.map(seat => {
                return seat.seat.seatId;
            });
            const seatsRowsReserved = reservedSeatsIdArray.map(id =>
                seatRows.flat().map(reservedSeat => {
                    if (id === reservedSeat.seatId) {
                        reservedSeat.isReserved = true;
                    }
                    return {
                        id: reservedSeat.seatId,
                        seatRow: reservedSeat.seatRow,
                        number: reservedSeat.number,
                        isReserved: reservedSeat.isReserved,
                    };
                })
            );
            const formattedRows = splitIntoNestedArrays(
                seatsRowsReserved[0],
                reduceValuesToSingleOnes(seatsRowsReserved[0], 'seatRow'),
                'seatRow'
            );
            setFinalSeatRows(formattedRows);
        } else if (seatRows.length) {
            setFinalSeatRows(seatRows);
        }
    }, [seatsReserved]);
    useEffect(() => {
        console.log(seatsSelected);
    }, [seatsSelected]);

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

    const addSeatCallback = (row, number, id, cb) => {
        setSeatsSelected(oldArray => [
            ...oldArray,
            {
                row: row,
                number: number,
                id: id,
            },
        ]);
        cb(row, number);
    };

    const removeSeatCallback = (row, number, id, cb) => {
        setSeatsSelected(
            seatsSelected.filter((seat, index, array) => {
                return seat.id !== id;
            })
        );
        cb(row, number);
    };

    return (
        <Fragment>
            <div>
                {finalSeatRows.length ? (
                    <span>
                        <h2 className="step-heading">Choose seat</h2>
                        <div className="seats">
                            <SeatPicker
                                rows={finalSeatRows}
                                maxReservableSeats={3}
                                addSeatCallback={addSeatCallback}
                                removeSeatCallback={removeSeatCallback}
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
