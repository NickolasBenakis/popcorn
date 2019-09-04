import React, { useState, useEffect } from 'react';
import SeatPicker from 'react-seat-picker';
import fetchSeatsReserved from '../../../api/fetchSeatsReserved';

function Seats({ movieShowingId, dateTime }) {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        
        getSeatsReserved();
    }, []);

    const getSeatsReserved = async () => {
        const seatsReserved = await fetchSeatsReserved(
            movieShowingId,
            dateTime
        );
        console.log(seatsReserved);
    };

    const rows = [
        [
            { number: 1 },
            { number: 2 },
            null,
            { number: '3', isReserved: true, orientation: 'east' },
            { number: '4', orientation: 'west' },
            null,
            { number: 5 },
            { number: 6 },
        ],
        [
            { number: 1, isReserved: true },
            { number: 2, isReserved: true },
            null,
            { number: '3', isReserved: true, orientation: 'east' },
            { number: '4', orientation: 'west' },
            null,
            { number: 5 },
            { number: 6 },
        ],
        [
            { number: 1 },
            { number: 2 },
            null,
            { number: 3, isReserved: true, orientation: 'east' },
            { number: '4', orientation: 'west' },
            null,
            { number: 5 },
            { number: 6 },
        ],
        [
            { number: 1 },
            { number: 2 },
            null,
            { number: 3, orientation: 'east' },
            { number: '4', orientation: 'west' },
            null,
            { number: 5 },
            { number: 6 },
        ],
        [
            { number: 1, isReserved: true },
            { number: 2, orientation: 'east' },
            null,
            { number: '3', isReserved: true },
            { number: '4', orientation: 'west' },
            null,
            { number: 5 },
            { number: 6, isReserved: true },
        ],
    ];

    return (
        <SeatPicker
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
        />
    );
}

export default Seats;
