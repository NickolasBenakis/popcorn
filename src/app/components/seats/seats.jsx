import React, { useState, useEffect, Fragment, useRef } from 'react';
import SeatPicker from 'react-seat-picker';
import fetchSeatsReserved from '../../../api/seatsReserved/fetchSeatsReserved';
import fetchSeats from '../../../api/seats/fetchSeats';
import {
    reduceValuesToSingleOnes,
    splitIntoNestedArrays,
    removeDuplicateElements
} from '../../utils/arrayUtils';
import useWindowDimensions from '../../hooks/useWindowDimensions';
function Seats({
    movieShowingId,
    auditoriumId,
    dateTime,
    getSeatsReservedData,
    toggleModal
}) {
    const [seatRows, setSeatRows] = useState([]);
    const [seatsReserved, setSeatsReserved] = useState([]);
    const [finalSeatRows, setFinalSeatRows] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);
    const { width } = useWindowDimensions();
    const seatsComponent = useRef(null);

    useEffect(() => {
        Promise.all([getSeats(), getSeatsReserved()]);
    }, []);

    useEffect(() => {
        if (seatRows.length && seatsReserved.length) {
            const reservedSeatsIdArray = seatsReserved.map(seat => {
                return seat.id;
            });
            const seatsRowsReserved = removeDuplicateElements(
                reservedSeatsIdArray
                    .map(id =>
                        seatRows.flat().map((seat, index, array) => {
                            if (id === seat.id) {
                                seat.isReserved = true;
                            }
                            return seat;
                        })
                    )
                    .flat()
            );
            const formattedRows = splitIntoNestedArrays(
                seatsRowsReserved,
                reduceValuesToSingleOnes(seatsRowsReserved, 'seatRow'),
                'seatRow'
            );
            setFinalSeatRows(formattedRows);
            moveViewToSeats();
        } else if (seatRows.length) {
            setFinalSeatRows(seatRows);
            moveViewToSeats();
        }
    }, [seatsReserved]);

    const getSeatsReserved = async () => {
        let seatsReserved = await fetchSeatsReserved(movieShowingId, dateTime);
        seatsReserved = seatsReserved.map(reservedSeat => {
            return {
                id: reservedSeat.seat.id,
                seatRow: reservedSeat.seat.seatRow,
                number: reservedSeat.seat.seatNumber,
                isReserved: reservedSeat.seat.seatsReserved
            };
        });
        setSeatsReserved(seatsReserved);
    };
    const getSeats = async () => {
        const seatsResponse = await fetchSeats(auditoriumId);
        const seats = seatsResponse.map(el => {
            return {
                id: el.id,
                seatRow: el.seatRow,
                number: el.seatNumber,
                isReserved: el.seatsReserved
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
                id: id
            }
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

    const moveViewToSeats = () => {
        const el = document.getElementById('load-content');
        if (width < 768) {
            el &&
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
        }
    };
    return (
        <Fragment>
            {finalSeatRows.length ? (
                <span>
                    <h2 className="step-heading">Choose seat</h2>
                    <div className="seats">
                        <SeatPicker
                            ref={seatsComponent}
                            rows={finalSeatRows}
                            maxReservableSeats={9}
                            addSeatCallback={addSeatCallback}
                            removeSeatCallback={removeSeatCallback}
                            alpha
                            visible
                            selectedByDefault
                        />
                    </div>
                    <section className="text-center">
                        <button
                            className="btn btn-primary text-center"
                            disabled={!seatsSelected.length}
                            onClick={() => {
                                getSeatsReservedData({
                                    seatsSelected: seatsSelected
                                });
                                toggleModal();
                            }}
                        >
                            Continue
                        </button>
                    </section>
                </span>
            ) : (
                <div>
                    <p className="step-heading"></p>
                    <div
                        id="load-content"
                        className="loading-bar container seats width-full"
                    ></div>
                </div>
            )}
        </Fragment>
    );
}

export default Seats;
