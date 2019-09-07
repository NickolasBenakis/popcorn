import React, { useState, useEffect, Fragment } from 'react';
import SeatPicker from 'react-seat-picker';
import fetchSeatsReserved from '../../../api/seatsReserved/fetchSeatsReserved';
import fetchSeats from '../../../api/seats/fetchSeats';

function Seats({ movieShowingId, auditoriumId, dateTime }) {
    const [seatRows, setSeatRows] = useState([]);

    useEffect(() => {
        Promise.all([getSeats(), getSeatsReserved()]);
    }, []);

    const getSeatsReserved = async () => {
        const seatsReserved = await fetchSeatsReserved(
            movieShowingId,
            dateTime
        );
    };
    const getSeats = async () => {
        const seatsResponse = await fetchSeats(auditoriumId);
        const seats = seatsResponse.map(el => {
            return {
                seatId: el.seatId,
                seatRow: el.seatRow,
                seatNumber: el.seatNumber,
                reserved: el.seatsReserved,
            };
        });
        const rowsCounterArray = seats
            .map(el => el.seatRow)
            .filter((value, index, self) => self.indexOf(value) === index);

        const rows = rowsCounterArray.map((el, index) => {
            return seats.filter(seat => {
                return seat.seatRow === rowsCounterArray[index];
            });
        });
        setSeatRows(rows);
    };
    return (
        <Fragment>
            <div>
                {seatRows.length ? (
                    <span className="easy-in">
                        <h2 className="step-heading">Choose seat</h2>
                        <div className="seats">
                            <SeatPicker
                                rows={seatRows}
                                maxReservableSeats={3}
                                alpha
                                visible
                                selectedByDefault
                            />
                        </div>
                    </span>
                ) : (
                    <span className="easy-in"></span>
                )}
            </div>
        </Fragment>
    );
}

export default Seats;
