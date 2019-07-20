import React, { Component } from 'react';
import SeatPicker from 'react-seat-picker';

class Example extends Component {
    render() {
        const rows = [
            [
                { number: 1, isSelected: true },
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
}

export default Example;
