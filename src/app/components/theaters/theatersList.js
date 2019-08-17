import React from 'react';
import TheaterCard from './theaterCard.jsx';

export default function TheatersList({ auditoriums }) {
    return (
        <div className="moviesList">
            {auditoriums.map(auditorium => {
                return (
                    <TheaterCard
                        key={auditorium.auditoriumId}
                        id={auditorium.auditoriumId}
                        name={auditorium.name}
                        description={auditorium.description}
                        totalSeats={auditorium.totalSeats}
                        seats={auditorium.seats}
                        movieShowing={auditorium.movieShowing}
                    />
                );
            })}
        </div>
    );
}
